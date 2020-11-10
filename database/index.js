import { MongoClient } from 'mongodb'
import { URL } from 'url'

let cachedDatabase
export const databaseConnection = async (collection) => {
  if (cachedDatabase) {
    if (collection) {
      return cachedDatabase.collection(collection)
    }
    return cachedDatabase
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const dbName = new URL(process.env.MONGODB_URI).pathname.substr(1)

  cachedDatabase = client.db(dbName)
  if (collection) {
    return cachedDatabase.collection(collection)
  }
  return cachedDatabase
}
