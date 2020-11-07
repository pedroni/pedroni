import { createUser } from '../../auth'

const post = async (req, res) => {
  const { email, password } = req.body
  if (!email) {
    return res.status(400).json({ message: 'email is required' })
  }
  if (!password) {
    return res.status(400).json({ message: 'password is required' })
  }
  try {
    const token = await createUser({ email, password })
    return res.status(200).json({ message: 'user created succesfuly', data: { email, token } })
  } catch {
    return res.status(500).json({
      message: 'An error ocurred'
    })
  }
}

export default (req, res) => {
  if (req.method === 'POST') {
    return post(req, res)
  } else {
    return res.status(405).json({
      message: 'method not allowed'
    })
  }
}
