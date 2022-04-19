const express = require("express");
const { createPatient ,getForm,welcomePage} = require("../controller/patient.controller");


const router = express.Router();

// http://localhost:9090/patient/creation
router.get("/creation", getForm)

router.post("/creation", createPatient)

router.get("/welcome",welcomePage)



module.exports = router;