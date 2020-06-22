const { Schema, model } = require("mongoose");
const ProfileImgSchema = new Schema({
  imgId: {
    type: String
  },
  keywords: { type: Array },
});
const UserSchema = new Schema({
  providerId: { type: String },
  providerName: { type: String },
  username: { type: Object },
  keywords: { type: Array },
  profileImg: [ProfileImgSchema],
  email: { type: String }
});
module.exports = model("User", UserSchema);
