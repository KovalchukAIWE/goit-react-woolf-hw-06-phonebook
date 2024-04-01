import styles from './Filter.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/filterSlice'; // Correct path

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value)); // Dispatch action with value as payload
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default Filter;
