import React, { PureComponent } from 'react';

class Try extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState, nextContext){

  // }  //원하는 것만 랜더링을 다시 해준다

  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;