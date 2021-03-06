const Firestore = require('@google-cloud/firestore')
const config = require('config')

/**
 * Register FireStore DB
 * Add project Id from config in test environment
 *
 * Link - https://cloud.google.com/firestore/docs/quickstart-servers#add_the_server_client_library_to_your_app
 */
const db = new Firestore({
  keyFilename: './firestore-private-key.json',
  ...(process.env.NODE_ENV === 'test' && { projectId: config.get('db.firestore.projectId') })
})

module.exports = db
