const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Here URI mentioned mongodb compass
    // const conn = await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });

    // Here URI mentioned mongodb cluster
    // const conn = await mongoose.connect(process.env.MONGODB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    // const conn = await mongoose.connect(process.env.MONGODB_URI);

    mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log("...");
    });

    // console.log(`MongoDB: ${conn.connection.host}`);
  } catch (e) {
    console.error(e);
  }
};

module.exports = connectDB;
