const getAave2Transactions = async (req, res, next) => {
  const walletAddress = req.params.walletAddress
  try {
    const result = "I am alive"
    return res.status(httpStatus.OK).json({
      success: true,
      status: httpStatus.OK,
      data: walletAddress,
    })
  } catch (err) {
    return next(err)
  }
}

module.exports = {
  getAave2Transactions,
}
