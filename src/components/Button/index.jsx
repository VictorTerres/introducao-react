import './styles.css';
import { Component } from "react";

export class Button extends Component {
  render() {
    const { onClick, text, hidden } = this.props;

    return (
      <button className="button" onClick={onClick} hidden={hidden} >
        {text}
      </button>
    );
  }
}