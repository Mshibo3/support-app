import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
let database: Db;

async function connect() {
  if (!client) {
    client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  if (!database) {
    database = client.db(process.env.MONGODB_DB_NAME);
  }

  return database;
}

export default connect;
