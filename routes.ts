import { Router } from "https://deno.land/x/oak/mod.ts";

import { addUser, listUsers, getSingleUser } from "./controllers/users.ts";

const router = new Router();

router
  .get("/users", listUsers)
  .get("/users/:userid", getSingleUser)
  .post("/users", addUser);

export default router;
