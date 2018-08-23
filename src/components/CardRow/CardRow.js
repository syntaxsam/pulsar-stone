import React, { Component } from 'react';
import PropTypes from "prop-types";
import autobind from "react-autobind";
import { StyledCardRow, CardName, Details, ExpandButton, ExpandedRow, ExpandedRowDetails } from './styles/StyledCardRow'


class CardRow extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    const { isExpanded, onClick } = this.props;
    return (
      <StyledCardRow
        {...this.props}
        isExpanded={isExpanded}
        onClick={onClick}
      >
        <Details>
          <CardName>{this.props.name}</CardName>
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
  name: PropTypes.string,
  imageUrl: PropTypes.string
}

export default CardRow