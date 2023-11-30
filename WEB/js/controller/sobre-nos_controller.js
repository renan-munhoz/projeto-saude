const express = require("express");
const path = require("path");
const banco = require("../banco")


const router = express.Router();

router.get("/sobre-nos", (req, res)=>{
    res.render("sobre-nos")
});

// PADRÃO SINGLETON
module.exports = router;