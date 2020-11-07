import bcrypt from 'bcrypt'
import { databaseConnection } from '../database'
import randomstring from 'randomstring'
import { intersection } from 'lodash'

const generateToken = () =>
  randomstring.generate({
    length: 255,
    charset: 'alphanumeric'
  })

export const createUser = async ({ email, password }) => {
  const database = await databaseConnection()
  const collection = database.collection('users')
  const exists = await collection.findOne({ email })
  if (exists) {
    throw new Error('User already exists.')
  }
  const token = generateToken()
  await collection.insertOne({
    email,
    password: await bcrypt.hash(password, 10),
    token
  })

  return token
}

export const authenticate = async ({ email, password }) => {
  const database = await databaseConnection()
  const collection = database.collection('users')
  let { token, password: passwordHash } = await collection.findOne({ email })
  if (!token) {
    token = generateToken()
    await collection.update(
      { email },
      {
        $set: {
          token
        }
      }
    )
  }
  await bcrypt.compare(password, passwordHash)
  return token
}

export const isAuthenticated = async ({ token = '', roles = [] }) => {
  token = token.replace('Bearer', '').trim()
  const database = await databaseConnection()
  const collection = database.collection('users')
  const user = await collection.findOne({ token })
  if (!user) {
    return false
  }
  if (roles.length && !intersection(roles, user.roles ?? []).length) {
    return false
  }
  return true
}
