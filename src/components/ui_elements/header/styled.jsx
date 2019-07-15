import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { typographyWeightBold } from '../../styles/typography'
import * as colors from '../../styles/colors'
import pxToEm from '../../utils/px_to_em'

const StyledHeader = styled.header`
  background: ${colors.blueGray};
  color: ${colors.white};
  height: auto;
  left: 0;
  padding: 5px 20px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
`

const StyledGrid = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 50% 50%;
`

const StyledFa = styled(FontAwesomeIcon)`
  font-size: ${pxToEm(20)};
`

const StyledCount = styled.div`
  align-items: center;
  background: ${colors.red};
  border-radius: ${pxToEm(26)};
  font-size: ${pxToEm(9)};
  display: flex;
  height: ${pxToEm(28)};
  width: ${pxToEm(28)};
  justify-content: center;
  top: ${pxToEm(16)};
  right: ${pxToEm(35)};
  position: absolute;
  ${typographyWeightBold};
`

export {
  StyledHeader,
  StyledGrid,
  StyledFa,
  StyledCount,
}
