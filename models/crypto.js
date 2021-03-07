const firestore = require('../utils/firestore')
const cryptoProductsCollection = firestore.collection('crypto-products')

/**
 * Fetches the data of crypto product
 * @return {Promise<userModel|Array>}
 */

const fetchProducts = async () => {
  try {
    const snapshot = await cryptoProductsCollection.get()

    const productsData = {}

    snapshot.forEach((doc) => {
      const data = doc.data()
      productsData[data.id] = { ...data }
    })
    return productsData
  } catch (err) {
    logger.error('Error retrieving product data', err)
    throw err
  }
}

module.exports = {
  fetchProducts
}