const mongoose = require("mongoose");

const USerSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("User", USerSchema);
module.exports=user 