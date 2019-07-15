import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as colors from '../styles/colors'
import { typographyWeightBold } from '../styles/typography'

import pxToEm from '../utils/px_to_em'
// import { pageLoadContentDisappear } from '../utils/transitions'


const StyledWishlist = styled.button`
  border: 0;
  color: ${colors.navy}; 
  font-size: ${pxToEm(11)};
  ${typographyWeightBold};
  /* todo: un mount animation */
`
const wishlistLabel = 'Save to wishlist'

const WishlistButton = (props) => {
  const { wishlist, wishlistOnClick } = props
  return (
    <StyledWishlist type="button" onClick={() => wishlistOnClick({ wishlist })}>
      {wishlistLabel}
    </StyledWishlist>
  )
}

WishlistButton.propTypes = {
  wishlist: PropTypes.bool.isRequired,
  wishlistOnClick: PropTypes.func.isRequired,
}

export default WishlistButton
