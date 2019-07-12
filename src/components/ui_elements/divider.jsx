import React from 'react'
import styled from 'styled-components'

import pxToEm from '../utils/px_to_em'
import * as colors from '../styles/colors'

const StyledLine = styled.div`
  background: ${colors.lightGray};
  height: ${pxToEm(1)};
`

const Divider = () => <StyledLine />

export default Divider
