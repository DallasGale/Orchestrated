import React from 'react'
import styled from 'styled-components'

import pxToEm from '../utils/px_to_em'

const StyledLayout = styled.div`
  padding: ${pxToEm(20)};
`

const Layout = (props) => {
  const { children } = props
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  )
}

export default Layout
