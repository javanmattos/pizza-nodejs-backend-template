const axios = require("axios")

const {
  comp2Addresses,
  comp2Names,
  comp2Length,
  comp2StartBlock,
  comp2EndBlock,
  COMP2_ETH_API_KEY,
  COMP2_INF_API_KEY,
} = require("../config/comp2.data")

const getComp2Transactions = async (req, res, next) => {
  try {
    const walletAddress = req.params.walletAddress
    // Make API request to fetch transactions
    const apiUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=${comp2StartBlock}&endblock=${comp2EndBlock}&sort=desc&apikey=${COMP2_ETH_API_KEY}`
    const response = await axios.get(apiUrl)

    const transactions = response.data.result
    const txLen = Object.keys(transactions).length
    console.log(`Transaction Length: ${txLen}`)
    const result = []

    for (let i = 0; i < txLen; i++) {
      // console.log(`Transaction to ${i}: ${transactions[i].to}`)
      for (let j = 0; j < comp2Length; j++) {
        // console.log(`Addresses ${j}: ${comp2Addresses[j]}`)
        // console.log(`Transaction from: ${transactions[i].from}`)
        if (
          transactions[i].from.toLowerCase() ==
            comp2Addresses[j].toLowerCase() ||
          transactions[i].to.toLowerCase() == comp2Addresses[j].toLowerCase()
        ) {
          const newTx = transactions[i]
          newTx.contractName = comp2Names[j]
          result.push(newTx)
          break
        }
      }
    }

    return res.json(result)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getComp2Transactions,
}
