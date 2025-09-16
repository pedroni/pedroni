'use client'
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import styles from './HomeContactForm.module.css'
// import { formDataToJson } from '../helpers'

interface HomeContactFormProps {
  translations: {
    nameLabel: string
    contactLabel: string
    subjectLabel: string
    sendButton: string
    sending: string
    errorMessage: string
  }
  style?: React.CSSProperties
}

const HomeContactForm = ({
  translations,
  style,
  ...props
}: HomeContactFormProps) => {
  const t = translations
  const [messageSent] = useState('')
  const [messageError, setMessageError] = useState('')
  const [loading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
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
    setMessageError(t.errorMessage)
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
            color: 'var(--color-primary)'
          }}
        >
          {messageSent}
        </div>
      </>
    )
  }

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit}
      style={style}
      {...props}
    >
      <div>
        <Input
          required
          style={{
            borderTopLeftRadius: 16
          }}
          name="name"
          label={t.nameLabel}
          type="text"
        />
      </div>
      <div>
        <Input required name="email" label={t.contactLabel} type="text" />
      </div>
      <div>
        <Input
          required
          style={{
            borderBottomRightRadius: 16
          }}
          name="subject"
          label={t.subjectLabel}
          type="text"
        />
      </div>
      <div>
        <Button disabled={loading} type="submit">
          {loading ? t.sending : t.sendButton}
        </Button>
        {messageError && (
          <div className="mt-3 text-rose-500">{messageError}</div>
        )}
      </div>
    </form>
  )
}

export default HomeContactForm
