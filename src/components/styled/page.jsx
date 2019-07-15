import React from 'react'
import styled from 'styled-components'

import { lightBlue } from '../styles/colors'
import pxToEm from '../utils/px_to_em'
import { pageLoadContentAppear } from '../utils/transitions'

import Layout from './layout'

const StyledPage = styled.main`
  background: ${lightBlue};
  padding-top: ${pxToEm(60)};
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
