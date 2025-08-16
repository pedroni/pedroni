'use client'
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import styles from './HomeContactForm.module.css'
// import { formDataToJson } from '../helpers'

const HomeContactForm = props => {
  const [messageSent, ] = useState('')
  const [messageError, setMessageError] = useState('')
  const [loading, ] = useState(false)
  const handleSubmit = async event => {
    event.preventDefault()
    // if (loading) {
    //   return
    // }
    // const body = formDataToJson(new FormData(event.target))
    // setLoading(true)
    // try {
    //   // make api call here
    //   console.error('Not implemented')
    //   // setMessageSent(response.data.message)
    // } catch (err) {
    //   if (err?.response?.data?.message) {
    //     setMessageError(err.response.data.message)
    //   } else {
    setMessageError(
      'Não foi possível enviar a mensagem. Por favor envie um e-mail para lucas@pedroni.dev'
    )
    // }
    // } finally {
    //   setLoading(false)
    // }
  }
  if (messageSent) {
    return (
      <>
        <div
          style={{
            marginTop: 64,
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
            color: 'var(--color-secondary-light)'
          }}
        >
          {messageSent}
        </div>
      </>
    )
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} {...props}>
      <div>
        <Input
          required
          style={{
            borderTopLeftRadius: 16
          }}
          name="name"
          label="Nome"
          type="text"
        />
      </div>
      <div>
        <Input required name="email" label="WhatsApp ou e-mail" type="text" />
      </div>
      <div>
        <Input
          required
          style={{
            borderBottomRightRadius: 16
          }}
          name="subject"
          label="Sobre o que você quer conversar?"
          type="text"
        />
      </div>
      <div>
        <Button disabled={loading} type="submit">
          {loading ? 'Enviando...' : 'Enviar mensagem'}
        </Button>
        {messageError && (
          <div className='mt-3 text-rose-500'>
            {messageError}
          </div>
        )}
      </div>
    </form>
  )
}

export default HomeContactForm
