import React, { Component } from "react";
import Sidebar from '../components/Sidebar/Sidebar'
import { ThemeProvider } from "glamorous";
import { StyledLayout, Content, PageTitle, Text } from '../components/Layout/styles/StyledLayout'

import primaryTheme from "../themes/primaryTheme";

class Home extends Component {
  render() {
    return (
      <ThemeProvider theme={primaryTheme}>
        <StyledLayout>
          <Sidebar />
          <Content>
            <PageTitle>What&#39;s Pulsar Stone?</PageTitle>
            <Text>This is the practicing field for learning reactjs, glamorous, and other things.</Text>
            <Text>You&#39;re probably wondering why the heck is a pulsar stone. A pulsar is
              an actual thing. It&#39;s a rotating neutron star that shoots out a beam of electromagnetic
              radiation. The beam of radiation can only been seen if it is pointing toward the observer. It
              looks like a pulse of because the neutron star is spinning so fast.
            </Text>
            <Text>A pulsar stone is a fragment of a pulsar that has broken off. Whoever possesses this little trinket
              has the power to beam themselves, and anyone caught in the glow, to any world in the universe. Yeah,
              so it&#39;s just a fictional thing I made up.
            </Text>
          </Content>
        </StyledLayout>
      </ThemeProvider>
    )
  }
}

export default Home