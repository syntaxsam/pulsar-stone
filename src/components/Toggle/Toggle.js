import React, { Component } from "react";
import { Div } from 'glamorous';
import './styles/toggle.css'

class Toggle extends Component {
  static defaultProps = { onToggle: () => { } }
  state = { on: false }
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on)
      },
    )

  render() {
    const { on } = this.state
    return (
      <Div css={{ paddingTop: "60px" }}>
        <div>Toggle Me</div>
        <Switch on={on} onClick={this.toggle} />
      </Div>
    )
  }
}

function Switch({ on, className = '', ...props }) {
  return (
    <div className="toggle">
      <input
        className="toggle-input"
        type="checkbox"
      />
      <button
        className={`${className} toggle-btn ${on
          ? 'toggle-btn-on'
          : 'toggle-btn-off'}`}
        aria-expanded={on}
        {...props}
      />
    </div>
  )
}

export default Toggle