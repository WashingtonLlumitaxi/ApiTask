const mongoose = require("mongoose");

const mongooseDelete = require("mongoose-delete");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String, 
      select:false
    },
    role: {
      type: ["user", "admin"],
      default: "user", // esto es lo que va ha ir por defecto
    },
  },
  {
    //crea columna de fecha de creacion y de actualizacion
    //TODO createdAt, updateAt
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.plugin(mongooseDelete, { overrideMethods: "all"});
module.exports = mongoose.model("user", UserSchema);
