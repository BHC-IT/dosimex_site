interface IConnection {
  isConnected?: number,
}

const mongoose = require('mongoose');

const connection : IConnection = {}

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  console.log(process.env.DB_URL);

  const db = await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
