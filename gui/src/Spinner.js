import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
        <p className={this.props.loading === true ? 'spinner loading' : 'spinner'}></p>
    );

  }
}

export default Spinner;