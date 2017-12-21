import React from "react";
import Sidebar from '../components/Sidebar/Sidebar'
import CardRow from '../components/CardRow/CardRow'
import { StyledLayout, Content, Text } from '../components/Layout/styles/StyledLayout'

const Home = () =>
  <StyledLayout>
    <Sidebar />
    <Content>
      <CardRow />
      <Text>
        Over the past 800 years, Agmar, a powerful sorcerer, has gained control
        of Jardim through violence and intimidation. Agmar’s motivation is power
        and he gains power by feeding off the suffering of others. His magic is
        darker than anyone can fathom, the limits to his power are unknown, even to
        himself. Under Agmar’s command are the men and women known as the Zarlots.
        The Zarlots surrendered their souls to Agmar to escape death and now serve
        him. He uses the Zarlots as assassins, spies, and anything else that will
        further his progression.
      </Text>
      <Text>
        Agmar must leave Jardim to find another world to conquer. He will not give
        up his power and die with the rest of the world. Using the pulsar stone, Agmar
        creates portals to send his minions off-world to search for a suitable
        replacement world. After a long time one of his minions finds Manirem.
      </Text>
    </Content>
  </StyledLayout>

export default Home