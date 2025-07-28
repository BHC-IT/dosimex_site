import mongoose from 'mongoose'

const connectDB = async () => {
	// Skip database connection during build time
	if (process.env.NODE_ENV === 'production' && !process.env.DB_URL && !process.env.MONGODB_URI) {
		console.warn('No database URL provided. Skipping database connection during build.')
		return
	}

	if (mongoose.connections[0].readyState) {
		return
	}

	const dbUrl =
		process.env.DB_URL || process.env.MONGODB_URI || 'mongodb://localhost:27017/dosimex'

	if (!dbUrl || dbUrl === '') {
		console.warn('No database URL provided. Skipping database connection.')
		return
	}

	try {
		await mongoose.connect(dbUrl)
		setTimeout(() => mongoose.connection.close(), 5000)
	} catch (error) {
		console.warn('Database connection failed:', error)
	}
}

export default connectDB
