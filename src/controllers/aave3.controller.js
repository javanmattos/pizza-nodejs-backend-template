const axios = require("axios")

const {
  aave3Addresses,
  aave3Names,
  aave3Length,
  aave3StartBlock,
  aave3EndBlock,
  AAVE3_ETH_API_KEY,
  AAVE3_INF_API_KEY,
} = require("../config/aave3.data")

const getAave3Transactions = async (req, res, next) => {
  try {
    const walletAddress = req.params.walletAddress
    // Make API request to fetch transactions
    const apiUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=${aave3StartBlock}&endblock=${aave3EndBlock}&sort=desc&apikey=${AAVE3_ETH_API_KEY}`
    const response = await axios.get(apiUrl)

    const transactions = response.data.result
    const txLen = Object.keys(transactions).length
    console.log(`Transaction Length: ${txLen}`)
    const result = []

    for (let i = 0; i < txLen; i++) {
      // console.log(`Transaction to ${i}: ${transactions[i].to}`)
      for (let j = 0; j < aave3Length; j++) {
        // console.log(`Addresses ${j}: ${comp2Addresses[j]}`)
        // console.log(`Transaction from: ${transactions[i].from}`)
        if (
          transactions[i].from.toLowerCase() ==
            aave3Addresses[j].toLowerCase() ||
          transactions[i].to.toLowerCase() == aave3Addresses[j].toLowerCase()
        ) {
          const newTx = transactions[i]
          newTx.contractName = aave3Names[j]
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
  getAave3Transactions,
}
