module.exports = {
    getAllHouses: async (req, res) => {
        const db = req.app.get('db')
        const houses = await db.get_all_houses()
        res.status(200).send(houses)
    },
    createHouse: async (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zip} = req.body
        const createHouse = await db.create_house([name, address, city, state, zip])
        res.status(200).send(createHouse)
    },
    deleteHouse: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const deleteHouse = await db.delete_house([id])
        res.status(200).send(deleteHouse)
    }
}