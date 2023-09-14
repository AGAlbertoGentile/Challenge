const { Forms } = require("../db");


const postForm = async (req, res) => {
    try {
        const originalForm = req.body;

        const formatedForm = {
            fullName : originalForm["Nombre completo"] || "",
            phone : originalForm["Número de teléfono"] ? parseInt(originalForm["Número de teléfono"]) : 12345678,
            date : originalForm["Fecha de inicio"] ? originalForm["Fecha de inicio"] : "",
            language : originalForm["¿Cuál es tu idioma preferido?"] || "",
            howFound : originalForm["¿Cómo nos encontraste?"] || "",
            subscription : originalForm["¿Desea recibir nuestro boletín informativo?"] ? originalForm["¿Desea recibir nuestro boletín informativo?"] : false,
        }
        console.log(formatedForm)
        const { fullName, phone, date, language, howFound, subscription } = formatedForm

        const newForm = await Forms.create({
            fullName,
            phone,
            date,
            language,
            howFound,
            subscription
        })
        res.status(200).json(newForm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    postForm,
}

