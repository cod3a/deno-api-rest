import usersData from "../users.data.ts";

const listUsers = (context: any) => {
  context.response.body = usersData;
};

const addUser = async (context: any) => {
  const body = await context.request.body();
  const user = body.value;
  // add in memory db
  usersData.push(user);
  context.response.body = "{status: 'success','message': 'user added'}";
};

const getSingleUser = (context: any) => {
  const userid = Number(context.params.userid);
  const [user] = usersData.filter((user) => user.id === userid);
  context.response.body = user;
};

export { addUser, getSingleUser, listUsers };
