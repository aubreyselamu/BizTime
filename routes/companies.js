/** Routes for companies */

const express = require("express")
let router = new express.Router();
const db = require('../db');

router.get('/',  async (req, res, next) => {
    try {
        const result = await db.query(`SELECT code, name FROM companies ORDER BY name`)
        return res.json({"companies": result.rows})
    } catch (e){
        return next(e)
    }
})


module.exports = router