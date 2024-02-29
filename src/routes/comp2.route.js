const express = require("express")
const comp2Controller = require("../controllers/comp2.controller")

const router = express.Router()

router.route("/:walletAddress").get(comp2Controller.getComp2Transactions)

module.exports = router
