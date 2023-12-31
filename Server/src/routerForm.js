const { Router } = require("express");
const { getByName } = require("./controllers/getByName")
const { postForm } = require("./controllers/postForm")
const { updateForm } = require("./controllers/updateForm")

const router = Router();

router.post("/newPost",postForm);

router.get("/",getByName);

router.put("/",updateForm)


module.exports = router;