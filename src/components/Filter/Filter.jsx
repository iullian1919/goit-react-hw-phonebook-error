import React from 'react';
import classes from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div className={classes.filterContainer}>
      Filter contacts by name:{' '}
      <input
        type="text"
        id="008"
        name="fox"
        value={filter}
        onChange={e => handleFilterChange(e.target.value)}
        className={classes.filterInput}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.any.isRequired,
  handleFilterChange: PropTypes.any.isRequired,
};

export default Filter;
