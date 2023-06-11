import express from "express";
import expressAsyncHandler from "express-async-handler";
import { Managers } from "../db/models.js";
import bcrypt from "bcryptjs";

const managerRouter = express.Router();
managerRouter.get(
  "/all",
  expressAsyncHandler(async (req, res) => {
    const items = await Managers.find({}, {password: 0})
    res.send(items)
  })
);
managerRouter.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    await Managers.findOne({
      email: req.body.email,
      department: req.body.department,
    })
      .then((e) => {
        if (e) {
          if (bcrypt.compareSync(req.body.password, e.password)) {
            res.send({
              fullname: e.fullname,
              email: e.email,
              phone: e.phone,
              department: e.department,
            });
          }
        } else {
          res.status(422).send({
            message:
              "Admin not found! if admin is not found then create a new admin.",
          });
        }
        return 0;
      })
      .catch((e) => {
        res.status(500).send({
          message: `error occured during fetching admin from db!. (ERROR) ${e}`,
        });
        return 0;
      });
  })
);
managerRouter.post(
  "/add-new",
  expressAsyncHandler(async (req, res) => {
    Managers.findOne({ email: req.body.email })
      .then(async (e) => {
        if (e) {
          res.status(422).send({
            success: false,
            message: "Email address is already exist!",
            variant: "danger",
          });
          return 0;
        } else {
          const form = new Managers({
            fullname: req.body.fullname,
            department: req.body.dept,
            email: req.body.email,
            phone: req.body.phone,
            password: bcrypt.hashSync(req.body.password, 8),
          });
          await form
            .save()
            .then((e) => {
              res.send({ success: true });
              return 1;
            })
            .catch((e) => {
              res.send({ success: false });
              return 0;
            });
        }
      })
      .catch((e) => {
        console.log("Error: ", e);
      });
  })
);
export default managerRouter;
