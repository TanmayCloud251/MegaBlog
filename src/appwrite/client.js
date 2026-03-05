import { Client } from "appwrite";
import conf from "../conf/conf";

const client = new Client();

client
    .setEndpoint(conf.url)
    .setProject(conf.projectId);

export default client;
