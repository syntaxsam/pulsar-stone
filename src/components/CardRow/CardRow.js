import React, { Component } from 'react';
import autobind from "react-autobind";
import PropTypes from "prop-types";
import { StyledCardRow, CardName, Details, ExpandButton, ExpandedRow, ExpandedRowDetails } from './styles/StyledCardRow'
import AttuneWithAether from './images/attune-with-aether_thumb.png';


class CardRow extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      isExpanded: false
    }
  }

  handleClick() {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  // Practice multiple states functions
  // withComponent Method Glamorous
  // have a component that passes props to a child component..
  // have a button to collaps or expand all rows.. 
  // Close row when click on other row..
  // componentWillRecieveProps will recieve props in react docs
  // if you want update child components state from outside you have to listen for it gotta do a lil bit of magic..
  // react matches

  render() {
    const { isExpanded } = this.state;

    return (
      <StyledCardRow
        isExpanded={isExpanded}
        onClick={this.handleClick}
      >
        <Details>
          <img src={AttuneWithAether} alt="AttuneWithAether" />
          <CardName>Attune with Aether</CardName>
        </Details>
        <ExpandButton className="expandButton">
          {!isExpanded ? 'Expand' : 'Expanded'}
        </ExpandButton>
        {isExpanded && (
          <ExpandedRow isExpanded={isExpanded}>
            <ExpandedRowDetails>Expanded Row Parts</ExpandedRowDetails>
          </ExpandedRow>
        )}
      </StyledCardRow>
    );
  }
}

export default CardRow