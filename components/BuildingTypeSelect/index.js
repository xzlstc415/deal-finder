import React from 'react';
import ReactSelect from 'react-select';

const options = [
  { value: null, label: 'All' },
  { value: 'Detached', label: 'Detached' },
  { value: 'Semi-Detached', label: 'Semi-Detached' },
  { value: 'Condo', label: 'Condo' },
  { value: 'Land', label: 'Land' },
  { value: 'Plaza', label: 'Plaza' }
];

const BuildingTypeSelect = props => (
  <ReactSelect {...props} options={options} className="filter-select" />
);

export default BuildingTypeSelect;
