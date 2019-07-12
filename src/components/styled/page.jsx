import React from 'react'
import styled from 'styled-components'

import { lightBlue } from '../styles/colors'

const StyledPage = styled.main`
  align-items: center;
  background: ${lightBlue};
  display: flex;
  min-height: 100vh;
`

const Page = (props) => {
  const { children } = props
  return (
    <StyledPage>
      {children}
    </StyledPage>
  )
}

export default Page
