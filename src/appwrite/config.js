import conf from "../conf/conf";
import { ID, Databases, Storage, Query } from "appwrite";
import client from "./client";

export class Service{
    databases;
    bucket;

    constructor(){
        this.databases = new Databases(client);
        this.bucket = new Storage(client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            // If slug is falsy, generate a unique id to avoid collisions
            const docId = slug || ID.unique();

            // NOTE: Appwrite permissions format has changed across versions. To avoid
            // sending an invalid permissions payload from the client, we rely on the
            // collection's default permissions (configured in the Appwrite Console).
            // If you want per-document permissions, set them in the Console or implement
            // a server-side function to set them with the correct format.
            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                docId,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                },
                // leave read/write permissions null so Appwrite applies collection defaults
                null,
                null
            )
        } catch (error) {
            console.log("Appwrite Service ::  CreatePost :: Error:", error)
        }
    }
    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwirte :: updatepost :: Error:", error)
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            )  
            return true;    
        } catch (error) {
            console.log("APppwrite:: DeletePost:: Error ", error)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            )
        } catch (error) {
            console.log("GetPost Err", error)
            return false
        }
    }
    
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.databaseId,
                conf.collectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite ListError :", error)
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Upload file error: ", error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.bucketId, fileId)
            return true
        } catch (error) {
            console.log("Appwirte deleteFile error: ", error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFileView(
            conf.bucketId,
            fileId
        )
    }
}

const service = new Service();

export default service