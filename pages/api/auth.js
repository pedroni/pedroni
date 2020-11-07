import { authenticate, isAuthenticated } from '../../auth'

const post = async (req, res) => {
  const { email, password } = req.body
  if (!email) {
    return res.status(400).json({ message: 'email is required' })
  }
  if (!password) {
    return res.status(400).json({ message: 'password is required' })
  }
  try {
    const token = await authenticate({ email, password })
    return res.status(200).json({ message: 'user authenticated', data: { token } })
  } catch (err) {
    console.log(err)
    return res.status(400).json({
      message: 'invalid credentials'
    })
  }
}
const get = async (req, res) => {
  const isAuth = await isAuthenticated({
    token: req.headers.authorization
  })
  if (!isAuth) {
    return res.status(401).send({ message: 'user not authenticated' })
  }
  return res.status(200).send({ message: 'user authenticated' })
}

export default (req, res) => {
  if (req.method === 'POST') {
    return post(req, res)
  } else if (req.method === 'GET') {
    return get(req, res)
  } else {
    return res.status(405)
  }
}
