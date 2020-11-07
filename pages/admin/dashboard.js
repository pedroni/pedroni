import React, { useState, useEffect } from 'react'
import Box from '../../components/Box'
import Layout from '../../components/Layout'
import useAuth from '../../hooks/useAuth'
import Head from 'next/head'
import axios from 'axios'
import ContactList from '../../components/dashboard/ContactList'
import styled from 'styled-components'

const dashboard = () => {
  const [contactList, setContactList] = useState(null)
  const [statistics, setStatistics] = useState(null)
  const auth = useAuth()
  useEffect(auth.guard, [auth.isAuthenticated, auth.token])
  const getContactList = async () => {
    const { data } = await axios.get('/api/contact')
    setStatistics(data.statistics)
    setContactList(data.data)
  }
  useEffect(() => {
    getContactList()
  }, [])
  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1
        style={{
          textAlign: 'center',
          marginTop: 140,
          fontWeight: 300,
          textTransform: 'uppercase'
        }}
      >
        Dashboard
      </h1>
      <Box
        style={{ marginTop: 100, marginBottom: 300, direction: 'top bottom' }}
        centerProps={{ style: { padding: '16px 32px', width: '100%' } }}
        boxProps={{
          style: {
            width: '100%'
          }
        }}
      >
        {
          !auth.isAuthenticated || !contactList || !statistics
            ? 'Carregando...'
            : (
            <>
            <StyledStatistics>
              <div>
                <strong>Última mensagem</strong>
                <p>
                {statistics.lastMessage.name}<br />
                {statistics.lastMessage.email}<br />
                {statistics.lastMessage.subject}<br />
                </p>
              </div>
              <div className="number">
                <strong>Total de e-mails</strong>
                <p>{statistics.emailsCount}</p>
              </div>
              <div className="number">
                <strong>Total de mensagens</strong>
                <p>{statistics.messagesCount}</p>
              </div>
            </StyledStatistics>
            <ContactList list={contactList || []} />
            </>
              )
        }
      </Box>
    </Layout>
  )
}

const StyledStatistics = styled.div`
  display: flex;
  margin-bottom: 32px;
  div {
    flex: 0 0 33.333%;
    strong {
      font-weight: 300;
      text-transform: uppercase;
      color: var(--color-secondary-light);
      letter-spacing: 6px;
      display: block;
      margin-bottom: 8px;
      text-align: center;
    }
    &.number {
      p {
        font-size: 48px;
        text-align: center;
      }
    }
  }
`

export default dashboard
