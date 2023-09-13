const Form = require("../model/Form");

const postForm = async (req, res) => {
    try {
        const form = req.body;

        const { fullName, phone, date, language, howFound, subscription } = form;

        const  newForm = await Form.create({
           fullName,
           phone,
           date,
           language,
           howFound,
           subscription
        })
        res.status(200).json(newForm);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {
    postForm,
}

