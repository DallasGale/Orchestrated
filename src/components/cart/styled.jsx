import styled from 'styled-components'
import * as colors from '../styles/colors'
import pxToEm from '../utils/px_to_em'
import { Card } from '../styled/card'
import { pageLoadContentAppear } from '../utils/transitions'
import { ScreenPhoneDown } from '../utils/media'

const StyledCart = styled.div`
  background: ${colors.white};
  margin: 0 auto;
  max-width: ${pxToEm(1060)};
  ${Card};
  opacity: 0;
  animation: ${pageLoadContentAppear} 0.5s ease forwards;
`

const StyledLineItem = styled.div`
  align-items: center;
  border-bottom: 1px solid ${colors.lightGray};
  border-top: 1px solid ${colors.lightGray};
  display: grid;
  font-size: ${pxToEm(13)};
  grid-template-columns: 50% 40% 5% 5%;
  padding-bottom: ${pxToEm(15)};
  padding-top: ${pxToEm(15)};
  width: 100%;
  @media ${ScreenPhoneDown} {
    grid-template-columns: 40% 30% 15% 15%;
  }
`

const StyledUnits = styled.small`
  border: 1px solid ${colors.lightGray};
  border-radius: 5px;
  padding: ${pxToEm(5)} ${pxToEm(0)};
  margin-left: ${pxToEm(10)};
  width: 30px;
`

export {
  StyledCart,
  StyledLineItem,
  StyledUnits,
}
