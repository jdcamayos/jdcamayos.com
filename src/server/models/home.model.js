import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const homeSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	value: {
		type: String,
	},
})

export default mongoose.model('Home', homeSchema)
