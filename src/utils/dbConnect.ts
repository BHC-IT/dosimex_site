import mongoose from 'mongoose';

const connectDB = async () => {
	console.log(mongoose.connections[0].readyState)

	if (mongoose.connections[0].readyState) {
		return;
	}

	await mongoose.connect(process.env.DB_URL ?? "");

	setTimeout(() => mongoose.connection.close(), 5000)
};

export default connectDB;
