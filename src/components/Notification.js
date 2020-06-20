import React from 'react';

export class Notification extends React.Component {
  render() {
    return <h3>{this.props.message}</h3>;
  }
}
