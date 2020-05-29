import db from "../config/db.ts";

const database = db.getDatabase;
const users = database.collection("users");

const listUsers = async (context: any) => {
  const usersFromMongoDb = await users.find({});
  context.response.body = usersFromMongoDb;
};

const addUser = async (context: any) => {
  const body = await context.request.body();
  const user = body.value; // user from request
  const insertedUser = await users.insertOne(user);
  context.response.body = "{status: 'success','message': 'added in mongoDB'}";
};

const getSingleUser = async (context: any) => {
  const userid = Number(context.params.userid);
  const [singleUserFromMongoDb] = await users.find({ id: userid });
  context.response.body = singleUserFromMongoDb;
};

export { addUser, getSingleUser, listUsers };
