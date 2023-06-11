import express from "express";
import "dotenv/config";
import cors from "cors";
import db from "./db/connection.js";
import bcrypt from "bcryptjs";
import { Applications, Settings, Users } from "./db/models.js";
import { upload } from "./lib/setup.js";
import managerRouter from "./routers/managersRouter.js";
import applicationRouter from "./routers/applicationRouter.js";

await db.connect();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

app.use("/api/manager", managerRouter);
app.use("/api/application", applicationRouter);

app.get("/api/settings", async (req, res) => {
  const setting = await Settings.findOne({ activeSetting: true });
  console.log(2123123, setting)
  res.send(setting);
});
app.post("/api/settings/save", async (req, res) => {
  const setting = await Settings.updateOne({ _id: req.body.id }, {$set: {departments: req.body.departments, subjects: req.body.subjects}});
  res.send('success');
});
app.get("/api/", (req, res) => {
  res.send(
    "it's look like you are accessing API without frontend requests. this only work on react frontend app."
  );
});

app.post("/api/form/add", upload.array("file"), async (req, res) => {
  let files = [];
  req.files.map((file) => files.push("/uploads/" + file.filename));
  const addForm = new Applications({
    ...req.body,
    files,
    status: "processing",
  });
  await addForm
    .save()
    .then((suc) => {
      res.send({ success: true });
      return 1;
    })
    .catch((e) => {
      res.status(500).send({ success: false, error: e });
      return 0;
    });
});

app.get("/api/user/fetch", async (req, res) => {
  const user = await Users.findOne(
    { email: req.query.email },
    { _id: 0, password: 0, createdAt: 0, updatedAt: 0 }
  );
  if (user) res.send({ message: "success", user });
  else res.send({ message: "not-found" });
});

app.post("/api/user/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    res.send({ message: "Email or Password is incorrect!", variant: "danger" });
    return 0;
  }
  const user = await Users.findOne(
    { email },
    { firstname: 1, lastname: 1, email: 1, password: 1, admin: 1 }
  );
  if (user) {
    console.log(user);
    if (bcrypt.compareSync(password, user.password)) {
      res.send({
        message: "Successfully Login!",
        variant: "success",
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          admin: user.admin,
        },
      });
    } else
      res.status(422).send({
        message: "Incorrect password! Check your password again.",
        variant: "danger",
      });
  } else
    res.status(422).send({
      message:
        "user not found against this email address! <a href='/sign-up' style='text-decoration:underline;color:black;'>create new account.</a>",
      variant: "alert",
    });
});

app.get("/api/user/all", async (req, res) => {
  const users = await Users.find({}, {address: 0, password: 0, updatedAt: 0})
  res.send(users)
});
app.post("/api/user/add", async (req, res) => {
  delete req.body.repassword;
  const add = new Users({
    ...req.body,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  await add
    .save()
    .then((e) => {
      res.send({
        message: "Successfully saved!",
        variant: "success",
        user: {
          firstname: add.firstname,
          lastname: add.lastname,
          email: add.email,
          admin: add.admin,
        },
      });
    })
    .catch((e) =>
      res.status(422).send({ message: `${e.message}`, variant: "danger" })
    );
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}.`);
});
