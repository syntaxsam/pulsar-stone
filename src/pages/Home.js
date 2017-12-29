import React, { Component } from "react";
import axios from 'axios';
import autobind from "react-autobind";
import PropTypes from "prop-types";
import Sidebar from '../components/Sidebar/Sidebar'
import CardRow from '../components/CardRow/CardRow'
import { StyledLayout, Content } from '../components/Layout/styles/StyledLayout'

class Home extends Component {
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
      <StyledLayout>
        <Sidebar />
        <Content>
          {
            this.state.cards.map((card) =>
              <CardRow key={card.id} name={card.name} imageUrl={card.imageUrl} />
            )
          }
        </Content>
      </StyledLayout>
    )
  }
}

export default Home