import React from 'react';
import classNames from 'classnames';

import './characterCounter.css';

const CharacterCounter = ({ count, max }) => {
  let countClasses = classNames({
    'CharacterCounter-Count': true,
    'CharacterCounter-Danger': count > max
  });

  return (
    <div className="CharacterCounter">
      <div className={countClasses}>{count}</div>
      <div>/</div>
      <div className="CharacterCounter-Max">{max}</div>
    </div>
  )
}

export default CharacterCounter;
