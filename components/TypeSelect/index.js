import React from 'react';
import ReactSelect from 'react-select';

const options = [
  { value: 'Residential', label: 'Residential' },
  { value: 'Land', label: 'Land' },
  { value: 'Commercial', label: 'Commercial' }
];

const TypeSelect = props => (
  <ReactSelect {...props} options={options} className="filter-select" />
);

export default TypeSelect;
