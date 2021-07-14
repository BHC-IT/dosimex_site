interface IConnection {
  isConnected?: number,
}

const mongoose = require('mongoose');

const connection : IConnection = {}

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect('mongodb://localhost:27017/dosimex', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
