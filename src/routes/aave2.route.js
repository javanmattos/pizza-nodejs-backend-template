const express = require("express")
const aave2Controller = require("../controllers/aave2.controller")

const router = express.Router()

router.get("/:walletAddress", aave2Controller.getAave2Transactions)

module.exports = router
