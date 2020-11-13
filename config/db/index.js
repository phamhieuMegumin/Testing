const mongoose = require("mongoose");
//"mongodb+srv://quanghieu:quanghieu@cluster0.ul1hj.mongodb.net/UsersList?retryWrites=true&w=majority";
//"mongodb://localhost/UsersList";
const url = process.env.MONGO_URI || "mongodb://localhost/UsersList";
async function connect() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connect successfully");
  } catch (error) {
    console.log("Connect faile");
  }
}
module.exports = { connect };
