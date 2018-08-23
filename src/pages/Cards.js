import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import autobind from "react-autobind";
import Sidebar from "../components/Sidebar/Sidebar";
import CardRow from "../components/CardRow/CardRow";
import { ThemeProvider, A, Div } from "glamorous";
import { StyledLayout, Content, PageTitle, Text } from "../components/Layout/styles/StyledLayout";

import primaryTheme from "../themes/primaryTheme";

class Cards extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      cards: [],
      isExpandedId: null
    };
  }

  componentDidMount() {
    axios.get("https://api.magicthegathering.io/v1/cards").then(response => {
      this.setState({
        cards: response.data.cards
      });
    });
  }

  handleClick(isExpandedId) {
    this.setState({ isExpandedId });
  }

  // Create another route that goes the card detail page based on card:id
  // Start doing forms

  render() {
    // const { isExpanded } = this.state
    return (
      <ThemeProvider theme={primaryTheme}>
        <StyledLayout>
          <Sidebar />
          <Content>
            <PageTitle>Card Rows</PageTitle>
            <Text>
              I&#39;m using axios to fetch the public API&nbsp;
              <A
                href="https://docs.magicthegathering.io/"
                target="_blank"
                rel="noopener noreferrer"
                color="#72ABF0"
                textDecoration="none"
              >
                https://docs.magicthegathering.io
              </A>. Then, I&#39;m mapping through the JSON, setting the state to an array, and limitting it to only show
              8 card rows. Finally, I&#39;m passing props from parent to child component.
            </Text>
            <Div marginTop="60px">
              <button onClick={() => this.handleClick(null)}>Close Rows</button>
              {this.state.cards
                .slice(0, 8)
                .map(card => (
                  <CardRow
                    onClick={() => this.handleClick(card.id)}
                    isExpanded={this.state.isExpandedId === card.id}
                    key={card.id}
                    name={card.name}
                    imageUrl={card.imageUrl}
                  />
                ))}
            </Div>
          </Content>
        </StyledLayout>
      </ThemeProvider>
    );
  }
}

Cards.propTypes = {
  isExpanded: PropTypes.bool
};

export default Cards;
