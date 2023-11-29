const express = require("express");
const path = require("path");
const Prontuario = require('../models/prontuario')
const banco = require("../banco")


const router = express.Router();

router.get("/start", (req, res)=>{
    res.render("index")
});

// PADRÃO SINGLETON
module.exports = router;