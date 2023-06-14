import express from "express";
import expressAsyncHandler from "express-async-handler";
import { Applications, Comments } from "../db/models.js";

const applicationRouter = express.Router();
applicationRouter.get(
  "/fetch-comments",
  expressAsyncHandler(async (req, res) => {
    const comments = await Comments.find({app_id: req.query.id}, {_id: 0, __v: 0,updatedAt:0}).sort('-_id').lean()
    res.send(comments)
  })
);
applicationRouter.post(
  "/comment",
  expressAsyncHandler(async (req, res) => {
    const app_status = req.body.app_status
    const app_id = req.body.app_id
    await Applications.updateOne({_id: app_id}, {$set: {status: app_status}})
    const comment = new Comments(req.body);
    comment.save().then(e => {
      res.send('success')
    }).catch(e =>{
      res.send('error')
    })
  })
);
applicationRouter.get(
  "/get",
  expressAsyncHandler(async (req, res) => {
    const items = await Applications.findOne({_id: req.query.id}, {}).sort("-1");
    res.send(items);
  })
);
applicationRouter.get(
  "/all",
  expressAsyncHandler(async (req, res) => {
    let items = undefined;
    if (req.query.details) items = await Applications.find({}, {}).sort("-_id");
    else
      items = await Applications.find(
        {},
        { _id: 0, subject: 1, createdAt: 1 }
      ).sort("-1");

    res.send(items);
  })
);

export default applicationRouter;
