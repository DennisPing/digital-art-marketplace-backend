import * as usersDao from "./users-dao.js";


const createUser = async (req, res) => {
  const newUser = req.body;
  const insertedUser = await usersDao.createUser(newUser);
  res.json(insertedUser);
};

const findUsers = async (req, res) => {
  const users = await usersDao.findUsers();
  res.json(users);
};

const updateUser = async (req, res) => {
  const userIdToUpdate = req.params.userId;
  const updates = req.body;
  const status = await usersDao.updateUser((userIdToUpdate, updates));
  res.json(status);
};

const deleteUser = async (req, res) => {
  const userIdToDelete = req.params.userId;
  const status = await usersDao.deleteUser(userIdToDelete);
  res.json(status);
};

const login = async (req, res) => {

  const credentials = req.body
  res.json(credentials)

}

export default (app) => {
  app.post("/api/users", createUser);
  app.get("/api/users", findUsers);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);

  app.post("api/users/login", login)
};
