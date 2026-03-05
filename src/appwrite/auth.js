import { Account, ID } from "appwrite";
import client from "./client";

export class AuthService {
     account; 

     constructor(){
        this.account = new Account(client)
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

     async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
     }

     async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            // Do not throw error here, let the calling code handle it
            // console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
     }

     async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
     }
}

const authService = new AuthService();

export default authService;