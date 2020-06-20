import React from 'react';
import MaterialButton from '@material-ui/core/Button';

export class Title extends React.Component {
  render() {
    return <h1>Будь-ласка залиште Ваш відгук</h1>;
  }
}

export class ButtonGood extends React.Component {
  render() {
    return (
      <MaterialButton variant="contained" color="primary" onClick={this.props.onGood}>
        Добре
      </MaterialButton>
    );
  }
}

export class ButtonNeutral extends React.Component {
  render() {
    return (
      <MaterialButton variant="contained" onClick={this.props.onNeutral}>
        Нейтрально
      </MaterialButton>
    );
  }
}

export class ButtonBad extends React.Component {
  render() {
    return (
      <MaterialButton variant="contained" color="secondary" onClick={this.props.onBad}>
        Погано
      </MaterialButton>
    );
  }
}
