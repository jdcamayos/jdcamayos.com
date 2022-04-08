import mongoose from 'mongoose'
import { config } from '../config'

const MONGO_URI = `mongodb+srv://${config.dbUsername}:${config.dbPassword}@${config.dbHost}/${config.dbDatabase}?retryWrites=true&w=majority`

export async function connect() {
	try {
		const connection = await mongoose.connect(MONGO_URI)
		console.log('MongoDB connected:', connection.connection.db.databaseName)
		return connection
	} catch (error) {
		console.log('MongoDB connection error:', error)
	}
}
