import React, { Component } from 'react'
import autobind from "react-autobind";
import { Grid, Flex, Cell } from 'golly'

class ControlledComponents extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      name: '',
      message: '',
      flavor: ''
    };

    this.handleChange = this.handleChange;
    this.handleSubmit = this.handleSubmit;
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    alert(
      'name:' + ' ' + this.state.name + '\n' +
      'message:' + ' ' + this.state.message + '\n' +
      'flavor:' + ' ' + this.state.flavor
    )
  }

  render() {
    return (
      <form>
        <Grid css={{ paddingTop: "60px" }}>
          <Cell size={12} alignItems="start" justifyContent="start">
            <Flex direction="column" alignItems="start">
              <label>Name:</label>
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Flex>
          </Cell>
          <Cell size={12} alignItems="start" justifyContent="start">
            <Flex direction="column" alignItems="start">
              <label>Message:</label>
              <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Flex>
          </Cell>
          <Cell size={12} alignItems="start" justifyContent="start">
            <Flex direction="column" alignItems="start">
              <label>Favorite flavor?</label>
              <select
                name="flavor"
                value={this.state.flavor}
                onChange={this.handleChange}
              >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </Flex>
          </Cell>
          <Cell size={12} alignItems="start" justifyContent="start">
            <Flex>
              <button onClick={e => this.handleSubmit(e)}>Submit</button>
            </Flex>
          </Cell>
        </Grid>
      </form>
    )
  }
}

export default ControlledComponents