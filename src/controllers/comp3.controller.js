const axios = require("axios")

const {
  comp3Addresses,
  comp3Names,
  comp3Length,
  comp3StartBlock,
  comp3EndBlock,
  COMP3_ETH_API_KEY,
  COMP3_INF_API_KEY,
} = require("../config/comp3.data")

const getComp3Transactions = async (req, res, next) => {
  try {
    const walletAddress = req.params.walletAddress

    // Make API request to fetch transactions
    const apiUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=${comp3StartBlock}&endblock=${comp3EndBlock}&sort=desc&apikey=${COMP3_ETH_API_KEY}`
    const response = await axios.get(apiUrl)

    const transactions = response.data.result
    const txLen = Object.keys(transactions).length
    console.log(`Transaction Length: ${txLen}`)
    const result = []

    for (let i = 0; i < txLen; i++) {
      // console.log(`Transaction to ${i}: ${transactions[i].to}`)
      for (let j = 0; j < comp3Length; j++) {
        // console.log(`Addresses ${j}: ${comp2Addresses[j]}`)
        // console.log(`Transaction from: ${transactions[i].from}`)
        if (
          transactions[i].from.toLowerCase() ==
            comp3Addresses[j].toLowerCase() ||
          transactions[i].to.toLowerCase() == comp3Addresses[j].toLowerCase()
        ) {
          const newTx = transactions[i]
          newTx.contractName = comp3Names[j]
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
  getComp3Transactions,
}
