import React from 'react'
import styled from 'styled-components'

import { lightBlue } from '../styles/colors'
import { pageLoadContentAppear } from '../utils/transitions'

import Layout from './layout'

const StyledPage = styled.main`
  background: ${lightBlue};
  min-height: 100vh;
  opacity: 0;
  position: relative;
  animation: ${pageLoadContentAppear} 0.6s ease forwards;
`

const Page = (props) => {
  const { children } = props
  return (
    <StyledPage>
      <Layout>
        {children}
      </Layout>
    </StyledPage>
  )
}

export default Page
