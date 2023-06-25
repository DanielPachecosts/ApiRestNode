const mongoose = require("mongoose");

const FacebookUserSchema = new mongoose.Schema(
  {
    facebookId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FacebookUser", FacebookUserSchema);
