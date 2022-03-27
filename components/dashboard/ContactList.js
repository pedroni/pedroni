import React, { useState } from 'react'
import styled from 'styled-components'

const ContactList = ({ list, ...props }) => {
  const [opened,setOpened] = useState(null)
  return (
    <StyledContactList>
      {list.map((item, index) => (
        <StyledContactListItem
          key={index}
          className={`${opened === item._id && 'opened'}`}
        >
          <StyledContactListHeader onClick={() => setOpened(item._id)}>
            {item.email}
          </StyledContactListHeader>
          <StyledContactListContent>
            {item.messages.map((message, index) => (
              <StyledContactListMessage key={index}>
                <strong>
                  {message.name} |{' '}
                  <em>
                    {new Date(message.createdAt).toLocaleDateString()} às{' '}
                    {new Date(message.createdAt).toLocaleTimeString()}
                  </em>
                </strong>
                <p>{message.subject}</p>
              </StyledContactListMessage>
            ))}
          </StyledContactListContent>
        </StyledContactListItem>
      ))}
    </StyledContactList>
  )
}

const StyledContactList = styled.div``

const StyledContactListHeader = styled.div`
  padding: 16px;
  cursor: pointer;
`

const StyledContactListContent = styled.div`
  padding: 8px 16px 24px;
`
const StyledContactListMessage = styled.div`
  padding: 8px 0;
  strong {
    display: block;
    margin-bottom: 8px;
    em {
      font-weight: 300;
    }
  }
`

const StyledContactListItem = styled.div`
  &:nth-child(odd) {
    background: rgba(255, 255, 255, 0.03);
  }
  &:not(.opened) ${StyledContactListContent} {
    display: none;
  }
  &.opened ${StyledContactListHeader} {
    /* color: red; */
  }
`

export default ContactList
