const express = require("express")
const comp3Controller = require("../controllers/comp3.controller")

const router = express.Router()

router.route("/:walletAddress").get(comp3Controller.getComp3Transactions)

module.exports = router
