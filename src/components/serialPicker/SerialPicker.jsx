import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import axios from 'axios';
import styles from './SerialPicker.module.css';
const url = 'http://localhost:4000';

const Serial = ({ handleCountryChange }) => {
  const [serial, setSerial] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const serial =  await axios.get(url);
      setSerial(serial.data);
  
    };
    fetchAPI();
  }, []);

  const serialList = serial.map((item,i) => {
    return(
      <option key={i} value={item.Serial}>{item.Serial}</option>
    )
  })

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Serial numbers</option>
        {serialList}
      </NativeSelect>
    </FormControl>
  );
};

export default Serial;