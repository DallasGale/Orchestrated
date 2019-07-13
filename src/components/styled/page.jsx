import React from 'react'
import styled from 'styled-components'

import { lightBlue } from '../styles/colors'
import pxToEm from '../utils/px_to_em'

const StyledPage = styled.main`
  background: ${lightBlue};
  padding-top: ${pxToEm(120)};
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
