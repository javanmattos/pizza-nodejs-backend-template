const aave2Addresses = [
  "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
  "0xa0d9C1E9E48Ca30c8d8C3B5D69FF5dc1f6DFfC24",
  "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
  "0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5",
  "0x135896DE8421be2ec868E0b811006171D9df802A",
  "0x80Aca0C645fEdABaa20fd2Bf0Daf57885A309FE6",
  "0x6A6FA664D4Fa49a6a780a1D6143f079f8dd7C33d",
]

const aave2Names = [
  "aave2-LendingPool",
  "aave2-WETHGateway",
  "aave2-AaveCollector",
  "aave2-IncentivesController",
  "aave2-LiquiditySwitchAdapter",
  "aave2-RepayWithCollateralAdapter",
  "aave2-DebtSwitchAdapter",
]

const aave2Length = 7
const aave2StartBlock = 11274800
const aave2EndBlock = 19400000

const AAVE2_ETH_API_KEY = "86Z9BNKCV87GPBNQKC3SQE8MJT2YNN693M"
const AAVE2_INF_API_KEY =
  "https://eth-mainnet.g.alchemy.com/v2/5H3RaVeXZu4S1M7EDoowny34ZvnQz1x-"

module.exports = {
  aave2Addresses,
  aave2Names,
  aave2Length,
  aave2StartBlock,
  aave2EndBlock,
  AAVE2_ETH_API_KEY,
  AAVE2_INF_API_KEY,
}
