import React, { Component } from "react";
import Sidebar from '../components/Sidebar/Sidebar'
import NameForm from '../components/ControlledComponents/NameForm'
import { ThemeProvider } from "glamorous";
import { StyledLayout, Content, PageTitle } from '../components/Layout/styles/StyledLayout'

import primaryTheme from "../themes/primaryTheme";

class ControlledComponents extends Component {
  render() {
    return (
      <ThemeProvider theme={primaryTheme}>
        <StyledLayout>
          <Sidebar />
          <Content>
            <PageTitle>Controlled Components</PageTitle>
            <NameForm />
          </Content>
        </StyledLayout>
      </ThemeProvider>
    )
  }
}

export default ControlledComponents