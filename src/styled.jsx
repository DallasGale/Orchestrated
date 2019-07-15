import styled from 'styled-components'
import pxToEm from './components/utils/px_to_em'
import * as colors from './components/styles/colors'
import { ScreenTabletDown, ScreenPhoneDown } from './components/utils/media'


export const StyledGrid = styled.div`
  display: grid;
  grid-gap: ${pxToEm(40)};
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: ${pxToEm(1060)};

  @media ${ScreenTabletDown} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${ScreenPhoneDown} {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const StyledEmptyCart = styled.div`
  text-align: center;
  color: ${colors.fadedBlue};
  font-weight: 300;
  font-size: ${pxToEm(40)}
`
