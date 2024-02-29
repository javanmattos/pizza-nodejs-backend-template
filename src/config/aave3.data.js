const aave3Addresses = [
  "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
  "0x893411580e590D62dDBca8a703d61Cc4A8c7b2b9",
  "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
  "0xADC0A53095A0af87F3aa29FE0715B5c28016364e",
  "0x02e7B8511831B1b02d9018215a0f8f500Ea5c6B3",
  "0x8761e0370f94f68Db8EaA731f4fC581f6AD0Bd68",
  "0x78F8Bd884C3D738B74B420540659c82f392820e0",
  "0xB748952c7BC638F31775245964707Bcc5DDFabFC",
]

const aave3Names = [
  "aave3-Pool",
  "aave3-WrappedTokenGateway",
  "aave3-Treasury",
  "aave3-LiquiditySwitchAdapter",
  "aave3-RepayWithCollateralAdapter",
  "aave3-DebtSwitchAdapter",
  "aave3-WithdrawSwitchAdapter",
  "aave3-MigrationContract",
]

const aave3Length = 8
const aave3StartBlock = 16496980
const aave3EndBlock = 19400000

const AAVE3_ETH_API_KEY = "5Z5STSJUEF4ZEUBHAHJR5TQBJ2DQSNK3JF"
const AAVE3_INF_API_KEY =
  "https://eth-mainnet.g.alchemy.com/v2/5H3RaVeXZu4S1M7EDoowny34ZvnQz1x-"

module.exports = {
  aave3Addresses,
  aave3Names,
  aave3Length,
  aave3StartBlock,
  aave3EndBlock,
  AAVE3_ETH_API_KEY,
  AAVE3_INF_API_KEY,
}
