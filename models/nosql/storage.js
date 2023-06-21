const mongoose = require("mongoose");

const mongooseDelete = require("mongoose-delete");

const StorageShema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String, 
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

StorageShema.plugin(mongooseDelete, { overrideMethods: "all"});
module.exports = mongoose.model("storages", StorageShema);
