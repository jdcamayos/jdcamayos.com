import { connect } from '../../server/libs/mongo'

export default async function index(req, res) {
	try {
		const connection = await connect()
		if(connection.connection.db.databaseName) {
			return res.status(200).json({
				message: 'pong',
				time: new Date(),
			})
		}
	} catch (error) {
		res.status(500).json({
			message: 'Database error',
		})
	}
}
