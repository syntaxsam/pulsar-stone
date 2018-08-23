import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import TheGrid from '../components/TheGrid/TheGrid'
import { ThemeProvider } from "glamorous";
import { StyledLayout, Content, PageTitle, Text } from '../components/Layout/styles/StyledLayout'

import primaryTheme from "../themes/primaryTheme";


const TheGridPage = () =>
  <ThemeProvider theme={primaryTheme}>
    <StyledLayout>
      <Sidebar />
      <Content>
        <PageTitle>The Grid</PageTitle>
        <Text>
          The Grid. A digital frontier. I tried to picture clusters of information as
          they moved through the computer. What did they look like? Ships? motorcycles?
          Were the circuits like freeways? I kept dreaming of a world I thought I'd
          never see. And then, one day...
        </Text>
        <TheGrid />
      </Content>
    </StyledLayout>
  </ThemeProvider>

export default TheGridPage