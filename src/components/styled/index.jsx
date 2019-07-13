import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import pxToEm from '../utils/px_to_em'

import Page from '../styled/page'
import Game from '../game'
import data from './data.json'

const StyledGrid = styled.div`
  display: grid;
  grid-gap: ${pxToEm(40)};
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: ${pxToEm(1060)};
`

const Games = () => {
  const { games } = data
  return (
    <Page>
      <StyledGrid>
        {
          games.map((game) => {
            const {
              id,
              description,
              sale,
              price: { now, was },
              title,
            } = game

            const save = was - now
            return (
              <Game
                addToCartOnClick={() => console.log('hey')}
                description={description}
                key={id}
                sale={sale}
                price={now}
                save={save}
                title={title}
                was={was}
              />
            )
          })
        }
      </StyledGrid>
    </Page>
  )
}

export default Games
