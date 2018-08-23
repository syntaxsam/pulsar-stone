import React from 'react'
import tron from './images/tron.jpg'
import { Flex, Cell } from 'golly'
import { GridImage, GridTitle, StyledTheGrid } from './styles/StyledTheGrid';

const TheGrid = () =>
  <StyledTheGrid size={12} gutter={{ x: 50, y: 60 }}>
    <Cell size={3} alignItems="center" justifyContent="center">
      <Flex direction="column" alignItems="center">
        <GridImage src={tron} alt="tron" />
        <GridTitle>Tron 1982</GridTitle>
      </Flex>
    </Cell>
    <Cell size={3} alignItems="center" justifyContent="center">
      <Flex direction="column" alignItems="center">
        <GridImage src={tron} alt="tron" />
        <GridTitle>Tron 1982</GridTitle>
      </Flex>
    </Cell>
    <Cell size={3} alignItems="center" justifyContent="center">
      <Flex direction="column" alignItems="center">
        <GridImage src={tron} alt="tron" />
        <GridTitle>Tron 1982</GridTitle>
      </Flex>
    </Cell>
    <Cell size={3} alignItems="center" justifyContent="center">
      <Flex direction="column" alignItems="center">
        <GridImage src={tron} alt="tron" />
        <GridTitle>Tron 1982</GridTitle>
      </Flex>
    </Cell>
    <Cell size={3} alignItems="center" justifyContent="center">
      <Flex direction="column" alignItems="center">
        <GridImage src={tron} alt="tron" />
        <GridTitle>Tron 1982</GridTitle>
      </Flex>
    </Cell>
    <Cell size={3} alignItems="center" justifyContent="center">
      <Flex direction="column" alignItems="center">
        <GridImage src={tron} alt="tron" />
        <GridTitle>Tron 1982</GridTitle>
      </Flex>
    </Cell>
    <Cell size={3} alignItems="center" justifyContent="center">
      <Flex direction="column" alignItems="center">
        <GridImage src={tron} alt="tron" />
        <GridTitle>Tron 1982</GridTitle>
      </Flex>
    </Cell>
    <Cell size={3} alignItems="center" justifyContent="center">
      <Flex direction="column" alignItems="center">
        <GridImage src={tron} alt="tron" />
        <GridTitle>Tron 1982</GridTitle>
      </Flex>
    </Cell>
  </StyledTheGrid>

export default TheGrid