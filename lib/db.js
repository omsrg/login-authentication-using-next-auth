import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb://omsiregar:guesswho30@cluster0-shard-00-00.oa6l4.mongodb.net:27017,cluster0-shard-00-01.oa6l4.mongodb.net:27017,cluster0-shard-00-02.oa6l4.mongodb.net:27017/authentication-demo?ssl=true&replicaSet=atlas-125q9f-shard-0&authSource=admin&retryWrites=true&w=majority"
  );

  return client;
};
