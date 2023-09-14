const {Forms} = require("../db");
const { Op } = require("sequelize");


const getByName = async (req, res) => {
    try {
        const {name} = req.query;

        let foundUserForm = await Forms.findAll({
            where: {
                fullName: {
                    [Op.iLike]: `%${name}%` // busco alguna coincidencia con el nombre ingresado.
                }
            },
        })
        res.status(200).json({foundUserForm});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports={
    getByName
}