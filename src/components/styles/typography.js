import styled from 'styled-components'
import pxToEm from '../utils/px_to_em'

export const TypographyHeading1 = styled.h1`
  font-size: ${pxToEm(22)};
`

export const TypographyHeading2 = styled.h2`
  font-size: ${pxToEm(20)};
`

export const TypographyHeading3 = styled.h3`
  font-size: ${pxToEm(20)};
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0;
`

export const TypographyHeading4 = styled.h4`
  font-size: ${pxToEm(14)};
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
`

export const typographyWeightBold = `
  font-weight: 700;
`
