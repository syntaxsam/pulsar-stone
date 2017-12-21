import React from 'react';
import { StyledCardRow, CardName, Details } from './styles/StyledCardRow'
import AttuneWithAether from './images/attune-with-aether_thumb.png';

const CardRow = () =>
  <StyledCardRow>
    <Details>
      <img src={AttuneWithAether} />
      <CardName>Attune with Aether</CardName>
    </Details>
  </StyledCardRow>

export default CardRow