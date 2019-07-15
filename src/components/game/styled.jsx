import styled from 'styled-components'
import * as colors from '../styles/colors'
import pxToEm from '../utils/px_to_em'
import { typographyWeightBold } from '../styles/typography'
import { Card } from '../styled/card'

const StyledCard = styled.article`
  background: ${colors.white};
  overflow: hidden;
  margin-bottom: ${pxToEm(20)};
  ${Card};
`

const StyledHero = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: ${pxToEm(182)};
  position: relative;
`

const StyledDescription = styled.p`
  font-size: ${pxToEm(14)};
`

const StyledPrice = styled.div`
  font-size: ${pxToEm(16)};
  ${typographyWeightBold};
`

const StyledTwoCol = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: ${pxToEm(20)};
`

const StyledGameInfo = styled.div`
  height: ${pxToEm(100)};
`

const StyledWasNow = styled.small`
  color: ${colors.blueGray}; 
  font-size: ${pxToEm(11)};
`

const StyledWishlist = styled.small`
  color: ${colors.navy}; 
  font-size: ${pxToEm(11)};
  ${typographyWeightBold};
`

export {
  StyledCard,
  StyledHero,
  StyledDescription,
  StyledPrice,
  StyledTwoCol,
  StyledGameInfo,
  StyledWasNow,
  StyledWishlist,
}
