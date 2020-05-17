const mongoose = require("mongoose");

const groupName = mongoose.Schema({
  name: { type: String, default: "" },
  description: { type: String, default: "" },
  image: { type: String, default: "default.png" },
  members: [
    {
      username: { type: String, default: "" },
      email: { type: String, default: "" },
    },
  ],
});

module.exports = mongoose.model("Group", groupName);
