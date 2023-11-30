const express = require("express");
const path = require("path");
const banco = require("../banco")


const router = express.Router();

router.get("/menuFuncionario", (req, res)=>{
    res.render("menu-funcionario")
});

// PADRÃO SINGLETON
module.exports = router;