import mongoose from "mongoose";

const settingSchema = new mongoose.Schema({
  subjects: { type: Array },
  departments: { type: Array },
  activeSetting: { type: Boolean, default: true },
});

const commentsSchema = new mongoose.Schema(
  {
    comment: { type: String, required: false },
    name: { type: String },
    from: { type: String, required: false },
    app_status: { type: String },
    app_id: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const managersSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    department: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const applicationSchema = new mongoose.Schema(
  {
    firstname: { type: String, length: 30, required: true },
    lastname: { type: String, length: 30, required: false },
    father: { type: String, length: 60, required: true },
    address: { type: String, length: 255, require: true },
    email: { type: String, length: 255, require: true },
    phone: { type: String, length: 16, require: true },
    subject: { type: String, length: 2048, require: true },
    body: { type: String, require: true },
    files: { type: Array, required: false },
    status: { type: String, default: "processing" },
  },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, length: 30, required: true },
    lastname: { type: String, length: 30, required: false },
    father: { type: String, length: 60, required: true },
    address: { type: String, length: 255, required: true },
    email: { type: String, length: 255, required: true, unique: true },
    phone: { type: String, length: 16, required: true },
    password: { type: String, length: 512, required: true },
    admin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Comments = mongoose.model("comments", commentsSchema);
export const Settings = mongoose.model("settings", settingSchema);
export const Managers = mongoose.model("managers", managersSchema);
export const Applications = mongoose.model("applications", applicationSchema);
export const Users = mongoose.model("users", userSchema);
