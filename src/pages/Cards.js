import React, { Component } from "react";
import axios from 'axios';
import autobind from "react-autobind";
import Sidebar from '../components/Sidebar/Sidebar'
import CardRow from '../components/CardRow/CardRow'
import { ThemeProvider, A, Div } from "glamorous";
import { StyledLayout, Content, PageTitle, Text } from '../components/Layout/styles/StyledLayout'

import primaryTheme from "../themes/primaryTheme";

class Cards extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    axios.get("https://api.magicthegathering.io/v1/cards")
      .then((response) => {
        this.setState({
          cards: response.data.cards
        })
      })
  }

  render() {
    return (
      <ThemeProvider theme={primaryTheme}>
        <StyledLayout>
          <Sidebar />
          <Content>
            <PageTitle>Cards</PageTitle>
            <Text>
              I&#39;m using axios to fetch the public API&nbsp;
              <A
                href="https://docs.magicthegathering.io/"
                target="_blank"
                rel="noopener noreferrer"
                color="#72ABF0"
                textDecoration="none">
                https://docs.magicthegathering.io
                </A>.
              Then, I&#39;m mapping through the JSON, setting the state to an array, and limitting it to only show 8 card rows. Finally, I&#39;m passing props from parent to child component.
            </Text>
            <Div marginTop="60px">
              {
                this.state.cards.slice(0, 8).map((card) =>
                  <CardRow key={card.id} name={card.name} imageUrl={card.imageUrl} />
                )
              }
            </Div>
          </Content>
        </StyledLayout>
      </ThemeProvider >
    )
  }
}

export default Cards