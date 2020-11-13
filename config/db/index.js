const mongoose = require("mongoose");
const MONGOURL =
  "mongodb+srv://quanghieu:quanghieu@cluster0.ul1hj.mongodb.net/UsersList?retryWrites=true&w=majority";
const MONGOURL1 = "mongodb://localhost/UsersList";
async function connect() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://quanghieu:quanghieu@cluster0.ul1hj.mongodb.net/UsersList?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("Connect successfully");
  } catch (error) {
    console.log("Connect faile");
  }
}
module.exports = { connect };
