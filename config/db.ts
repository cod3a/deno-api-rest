import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import { config as env } from "https://deno.land/x/dotenv/mod.ts";

class Database {
  public client: MongoClient;

  constructor(public dbName: string, public uri: string) {
    this.dbName = dbName;
    this.uri = uri;
    this.client = {} as MongoClient;
  }

  connect() {
    const client = new MongoClient();
    client.connectWithUri(this.uri);
    this.client = client;
  }

  get getDatabase() {
    return this.client.database(this.dbName);
  }
}

const { DBNAME, URI } = env();

const db = new Database(DBNAME, URI);

db.connect();

export default db;
