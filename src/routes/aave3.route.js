const express = require("express")
const aave3Controller = require("../controllers/aave3.controller")

const router = express.Router()

router.route("/:walletAddress").get(aave3Controller.getAave3Transactions)

module.exports = router
