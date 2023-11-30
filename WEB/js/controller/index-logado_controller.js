const express = require("express");
const path = require("path");
const banco = require("../banco")


const router = express.Router();

router.get("/index-logado", (req, res)=>{
    res.render("index-logado")
});

// PADRÃO SINGLETON
module.exports = router;