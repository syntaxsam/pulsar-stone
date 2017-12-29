import React, { Component } from 'react';
import PropTypes from "prop-types";
import autobind from "react-autobind";
import { StyledCardRow, CardName, Details, ExpandButton, ExpandedRow, ExpandedRowDetails } from './styles/StyledCardRow'


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

  render() {
    const { isExpanded } = this.state;
    return (
      <StyledCardRow
        isExpanded={isExpanded}
        onClick={this.handleClick}
      >
        <Details>
          <CardName><b>Card Name:</b> {this.props.name}</CardName>
        </Details>
        <ExpandButton className="expandButton">
          {!isExpanded ? 'Expand' : 'Expanded'}
        </ExpandButton>
        {isExpanded && (
          <ExpandedRow isExpanded={isExpanded}>
            <ExpandedRowDetails>
              <img src={this.props.imageUrl} alt={this.props.name} />
            </ExpandedRowDetails>
          </ExpandedRow>
        )}
      </StyledCardRow>
    );
  }
}

CardRow.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string
}

export default CardRow