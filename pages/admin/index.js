import React, { useState, useRef } from 'react'
import Box from '../../components/Box'
import Layout from '../../components/Layout'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { formDataToJson } from '../../helpers'
import useAuth from '../../hooks/useAuth'
import Alert from '../../components/Alert'
import Head from 'next/head'

import { useRouter } from 'next/router'
const index = () => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const formEl = useRef(null)
  const auth = useAuth()
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (loading) {
      return
    }
    const data = formDataToJson(new FormData(formEl.current))
    try {
      setLoading(true)
      await auth.authenticate(data)
      router.push('/admin/dashboard')
    } catch {
      setMessage('Credenciais inválidas, tente novamente')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Área administrativa</title>
      </Head>
      <h1
        style={{
          textAlign: 'center',
          marginTop: 140,
          fontWeight: 300,
          textTransform: 'uppercase'
        }}
      >
        Olá, Lucas
        <br />
        <small>Seja bem-vindo novamente</small>
      </h1>
      <Box
        style={{ marginTop: 100, marginBottom: 300, maxWidth: 500, direction: 'top bottom' }}
        centerProps={{ style: { padding: '16px 32px', width: '100%' } }}
        boxProps={{
          style: {
            width: '100%'
          }
        }}
      >
        <form ref={formEl} onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <Input name="email" label="E-mail" style={{ marginBottom: 16 }} />
          <Input
            name="password"
            type="password"
            label="Senha"
            style={{ marginBottom: 16 }}
          />
          {message && (
            <Alert style={{ marginBottom: 16 }}>{message}</Alert>
          )}
          <Button disabled={loading}>{loading ? 'Verificando...' : 'Entrar'}</Button>
        </form>
      </Box>
    </Layout>
  )
}
export default index
