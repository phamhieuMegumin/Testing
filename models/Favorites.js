const mongoose = require("mongoose");
const FavoriteSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
  },
  {
    collection: "Favorites",
  }
);

module.exports = mongoose.model("Favorites", FavoriteSchema);
