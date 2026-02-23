import conf from "../conf/conf"
import { Client,Account,ID } from "appwrite";

export class AuthService {
     client = new Client();
     account = new Account(); 

     constructor(){
        this.client
        .setEndpoint(conf.url)
        .setProject(conf.projectId)
        
        this.account = new Account(this.client)
     }
    

     async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if(userAccount){
                // call another method - create session after signup
                return this.login({ email, password })
            }else{
                return userAccount;
            }

        } catch (error) {
            throw error;
        }

     }

     async login(data){
        try {
            const { email, password } = data || {};
            const session = await this.account.createEmailPasswordSession(email, password);

            // Create JWT and set it on client so subsequent requests are authenticated
            try {
                const token = await this.account.createJWT();
                if(token && token.jwt){
                    this.client.setJWT(token.jwt);
                }
            } catch (jwtErr) {
                // non-fatal: if JWT creation fails, continue — calls may still work via cookies
                console.warn('Failed to create/set JWT after login', jwtErr);
            }

            return session;
        } catch (error) {
            throw error;
        }
     }

     async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
     }

     async logout(){
        try {
                    await this.account.deleteSessions(); 
                    // Clear JWT on client
                    try { this.client.setJWT(''); } catch (e) {}
        } catch (error) {
            throw error
        }
     }
}

const authService = new AuthService();

export default authService;