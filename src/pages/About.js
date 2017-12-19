import React from "react";
import Sidebar from '../components/Sidebar/Sidebar'
import { StyledLayout, Content, Text } from '../components/Layout/styles/StyledLayout'

const About = () =>
  <StyledLayout>
    <Sidebar />
    <Content>
      <h1>About Page</h1>
      <Text>
        Manirem, is an earth-like world with forests, mountains, and oceans. Manirem
        contains four main kingdoms: Dutan, Worsul, Ustran, and Eldnwar. The kingdoms
        of Manirem are in a state of conflict. Worsul has declared war against the other
        three kingdoms in order to gain control of the precious resources in the ground.
        The other three kingdoms are not allies or enemies. They remain neutral to each
        other while all are at war with Worsul.
      </Text>
      <Text>
        Loghan lives in the misty forest outside the capital city of Eldnwar. They
        are preparing for the worst as they brace theirselves for battle agains the mighty Worsul.
      </Text>
    </Content>
  </StyledLayout>

export default About