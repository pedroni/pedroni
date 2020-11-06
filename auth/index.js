import bcrypt from 'bcrypt'
import { databaseConnection } from '../database'
import randomstring from 'randomstring'

export const createUser = async ({email, password}) => {
  const database = await databaseConnection()
  const collection = database.collection('users')
  const exists = await collection.findOne({email})
  if (exists) {
    throw 'User already exists.'
  }
  const token = randomstring.generate({
    length: 255,
    charset: 'alphanumeric'
  })
  await collection.insertOne({
    email,
    password: await bcrypt.hash(password, 10),
    token
  })

  return token
}

export const isAuthenticated = async ({token}) => {
  token = token.replace('Bearer', '').trim()
  const database = await databaseConnection()
  const collection = database.collection('users')
  const exists = await collection.findOne({token})
  if (exists) {
    return true
  } 
  return false
}