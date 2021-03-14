const { fetchWallet } = require('../models/wallets')

const ERROR_MESSAGE = 'Something went wrong. Please try again or contact admin'

/**
 * Get the  contributions of the user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

const getUserWallet = async (req, res) => {
  try {
    const { id: userId } = req.userData
    const walletData = await fetchWallet(userId)
    return res.status(200).json({
      message: 'Wallet returned successfully',
      wallet: walletData
    })
  } catch (err) {
    logger.error(`Error while retriving contributions ${err}`)
    return res.boom.badImplementation(ERROR_MESSAGE)
  }
}

module.exports = {
  getUserWallet
}