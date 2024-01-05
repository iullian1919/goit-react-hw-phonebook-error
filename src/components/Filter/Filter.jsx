import React from 'react';
import classes from './Filter.module.css';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div className={classes.filterContainer}>
      Filter contacts by name:{' '}
      <input
        type="text"
        value={filter}
        onChange={e => handleFilterChange(e.target.value)}
        className={classes.filterInput}
      />
    </div>
  );
};

export default Filter;
