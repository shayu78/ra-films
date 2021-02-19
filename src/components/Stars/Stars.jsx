import React from 'react';
import Star from '../Star/Star';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function Stars(props) {
  const { count } = props;

  if (!Number.isInteger(count) || count < 1 || count > 5) return false;

  const stars = Array(count).fill('').map(() => nanoid());

  return (
    <ul className="card-body-stars">
      {stars.map((value) => <li key={value}><Star /></li>)}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};
