import "./styles.css";
import { Component } from "react";

export class Button extends Component {
  render() {
    const { text, clicou, disabled } = this.props;

    return (
      <button className="button" onClick={clicou} disabled={disabled}>
        {text}
      </button>
    );
  }
}
