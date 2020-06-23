import React from 'react';
import MaterialButton from '@material-ui/core/Button';

export class Button extends React.Component {
  render() {
    return (
      <MaterialButton
        variant="contained"
        color={this.props.color}
        onClick={() => this.props.addFeedback(this.props.data)}
      >
        {this.props.message}
      </MaterialButton>
    );
  }
}
