export default function index(req, res) {
	const { method } = req
	switch (method) {
		case 'GET':
			return res.status(200).json({
				message: 'Home attributes listed',
				data: [],
			})
		case 'POST':
			return res.status(200).json({
				message: 'Home attribute created',
				data: {},
			})
		default:
			return res.status(405).json(`Method ${method} not allowed`)
	}
}
