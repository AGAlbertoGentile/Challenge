const { Forms } = require("../db");


const updateForm = async (req, res) => {
    console.log('te amo adri')
    try {
        const { id, fullName, phone, date, language, howFound, subscription } = req.body;

        const updateInformation = { fullName, phone, date, language, howFound, subscription }

        console.log(updateInformation)

        const updatedForm = await Forms.update(updateInformation, {
            where: {id: id},
        })

        res.status(200).send(updatedForm)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = {
    updateForm
}
