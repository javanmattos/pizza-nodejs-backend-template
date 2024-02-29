const express = require("express")
const aave2Route = require("./aave2.route")
const aave3Route = require("./aave3.route")
const comp2Route = require("./comp2.route")
const comp3Route = require("./comp3.route")

const router = express.Router()

router.use("/aave2/", aave2Route)
router.use("/aave3/", aave3Route)
router.use("/comp2/", comp2Route)
router.use("/comp3/", comp3Route)

module.exports = router
