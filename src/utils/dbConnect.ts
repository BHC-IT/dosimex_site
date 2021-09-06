interface IConnection {
  isConnected?: number,
}

const mongoose = require('mongoose');

const connection : IConnection = {}

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.DB_URL)

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
