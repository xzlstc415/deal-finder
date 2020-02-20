import React, { useState, useEffect } from 'react';
import { fetchListings } from '../../data/listing';
import PropertyList from './PropertyList';
import useLocation from '../../hooks/useLocation';
import useBedrooms from '../../hooks/useBedrooms';
import Select from '../Select';

const Welcome = () => {
  const [listings, setListings] = useState([]);
  const [location] = useLocation();
  const [bedrooms, setBadrooms] = useBedrooms();
  const [bathrooms, setBathrooms] = useState(null);
  const [type, setType] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [listedSince, setListedSince] = useState(null);
  const [buildingType, setBuildingType] = useState(null);
  const [mlsNumber, setMlsNumber] = useState(null);
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
      <form onSubmit={handleSubmit} className="filter-form">
        <Select
          placeholder="No. of bedrooms"
          onChange={selectedOption => {
            setBadrooms(selectedOption.value);
          }}
        />
        <Select
          placeholder="No. of bathrooms"
          onChange={selectedOption => {
            setBathrooms(selectedOption.value);
          }}
        />
        <button type="submit">Filter</button>
      </form>
      <PropertyList listings={listings} />
    </div>
  );
};

export default Welcome;
