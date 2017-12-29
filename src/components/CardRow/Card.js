import React, { Component } from 'react';
import axios from 'axios';
import autobind from 'react-autobind';

class Card extends Component {
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
    // const cardItems = this.state.cards.map((card) =>
    //   <img key={card.id} src={card.imageUrl} />
    // );
    return (
      <div>
        {
          this.state.cards.map((card) =>
            <img key={card.id} src={card.imageUrl} />
          )
        }       
      </div>
    )
  }
}


export default Card;