import React from 'react';
import ReactSelect from 'react-select';

const options = [
  { value: '1', label: '1' },
  { value: '1+', label: '1+' },
  { value: '2', label: '2' },
  { value: '2+', label: '2+' },
  { value: '3', label: '3' },
  { value: '3+', label: '3+' },
  { value: '4', label: '4' },
  { value: '4+', label: '4+' }
];

const Select = props => (
  <ReactSelect {...props} options={options} className="filter-select" />
);

export default Select;
