import React from 'react'
import styled from 'styled-components'

import * as colors from '../styles/colors'
import { typographyWeightBold } from '../styles/typography'
import pxToEm from '../utils/px_to_em'

import Layout from '../styled/layout'

const StyledBanner = styled.div`
  background: ${colors.lightGreen};
  border-radius: ${pxToEm(2)};
  color: ${colors.white};
  display: inline-block;
  font-size: ${pxToEm(12)};
  padding: ${pxToEm(2)} ${pxToEm(10)} ${pxToEm(4)};
  width: auto;
  ${typographyWeightBold};
`


const OnSaleBanner = () => {
  const label = 'ON SALE!'
  return (
    <Layout>
      <StyledBanner>{label}</StyledBanner>
    </Layout>
  )
}

export default OnSaleBanner
