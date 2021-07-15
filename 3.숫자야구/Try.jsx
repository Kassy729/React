import React, { memo } from 'react';

const Try = memo(({tryInfo}) => {  //memo props나 state가 바뀌었을때만 랜더링을 함 훅스
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

export default Try;
