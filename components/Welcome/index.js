import React, { useState, useEffect } from 'react';
import { fetchListings } from '../../data/listing';
import PropertyList from './PropertyList';
import RoomSelect from '../RoomSelect';
import TypeSelect from '../TypeSelect';
import BuildingTypeSelect from '../BuildingTypeSelect';
import Input from '../Input';

const Welcome = () => {
  const [listings, setListings] = useState([]);
  const [bedrooms, setBedrooms] = useState(null);
  const [bathrooms, setBathrooms] = useState(null);
  const [type, setType] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [listedSince, setListedSince] = useState(null);
  const [buildingType, setBuildingType] = useState(null);
  useEffect(() => {
    setListings(
      fetchListings({
        bedrooms,
        bathrooms,
        type,
        minPrice,
        maxPrice,
        listedSince,
        buildingType
      })
    );
  }, []);
  const handleSubmit = event => {
    event.preventDefault();
    setListings(
      fetchListings({
        bedrooms,
        bathrooms,
        type,
        minPrice,
        maxPrice,
        listedSince,
        buildingType
      })
    );
  };
  return (
    <div className="hero">
      <h1 className="title">Welcome to DealFinder.js!</h1>
      <p className="description">
        This is a page that helps you to find your next home or investment
      </p>
      <form onSubmit={handleSubmit}>
        <div className="filter-form">
          <RoomSelect
            placeholder="No. of bedrooms"
            onChange={selectedOption => {
              setBedrooms(selectedOption.value);
            }}
          />
          <RoomSelect
            placeholder="No. of bathrooms"
            onChange={selectedOption => {
              setBathrooms(selectedOption.value);
            }}
          />
          <TypeSelect
            placeholder="Property Type"
            onChange={selectedOption => {
              setType(selectedOption.value);
            }}
          />
          <BuildingTypeSelect
            placeholder="Building Type"
            onChange={selectedOption => {
              setBuildingType(selectedOption.value);
            }}
          />
        </div>
        <div className="filter-form">
          <Input
            placeholder="Min Price"
            onChange={event => {
              setMinPrice(event.target.value);
            }}
          />
          <Input
            placeholder="Max Price"
            onChange={event => {
              setMaxPrice(event.target.value);
            }}
          />
          <Input
            placeholder="Listed Since"
            onChange={event => {
              setListedSince(event.target.value);
            }}
          />
        </div>
        <div className="filter-form">
          <button type="submit">Filter</button>
        </div>
      </form>
      <PropertyList listings={listings} />
    </div>
  );
};

export default Welcome;
