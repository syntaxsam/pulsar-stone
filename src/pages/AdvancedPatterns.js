import React, { Component } from "react";
import Sidebar from '../components/Sidebar/Sidebar'
import Toggle from '../components/Toggle/Toggle'
import { ThemeProvider } from "glamorous";
import { StyledLayout, Content, PageTitle } from '../components/Layout/styles/StyledLayout'

import primaryTheme from "../themes/primaryTheme";

class AdvancedPatterns extends Component {
  render() {
    return (
      <ThemeProvider theme={primaryTheme}>
        <StyledLayout>
          <Sidebar />
          <Content>
            <PageTitle>Advanced React Component Patterns Egghead.io Course</PageTitle>
            <Toggle />
          </Content>
        </StyledLayout>
      </ThemeProvider>
    )
  }
}

export default AdvancedPatterns