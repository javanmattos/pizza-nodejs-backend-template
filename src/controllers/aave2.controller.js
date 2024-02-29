const axios = require("axios")

const {
  aave2Addresses,
  aave2Names,
  aave2Length,
  aave2StartBlock,
  aave2EndBlock,
  AAVE2_ETH_API_KEY,
  AAVE2_INF_API_KEY,
} = require("../config/aave2.data")

const getAave2Transactions = async (req, res, next) => {
  try {
    const walletAddress = req.params.walletAddress
    // Make API request to fetch transactions
    const apiUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=${aave2StartBlock}&endblock=${aave2EndBlock}&sort=desc&apikey=${AAVE2_ETH_API_KEY}`
    const response = await axios.get(apiUrl)

    const transactions = response.data.result
    const txLen = Object.keys(transactions).length
    console.log(`Transaction Length: ${txLen}`)
    const result = []

    for (let i = 0; i < txLen; i++) {
      // console.log(`Transaction to ${i}: ${transactions[i].to}`)
      for (let j = 0; j < aave2Length; j++) {
        // console.log(`Addresses ${j}: ${comp2Addresses[j]}`)
        // console.log(`Transaction from: ${transactions[i].from}`)
        if (
          transactions[i].from.toLowerCase() ==
            aave2Addresses[j].toLowerCase() ||
          transactions[i].to.toLowerCase() == aave2Addresses[j].toLowerCase()
        ) {
          const newTx = transactions[i]
          newTx.contractName = aave2Names[j]
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
  getAave2Transactions,
}
