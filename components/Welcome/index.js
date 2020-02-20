import React, { useState, useEffect } from 'react';
import { fetchListings } from '../../data/listing';
import PropertyList from './PropertyList';

const Welcome = () => {
  const [listings, setListings] = useState([]);
  const [location, setLocation] = useState(null);
  const [bedrooms, setBedrooms] = useState(null);
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
  }, [
    bedrooms,
    bathrooms,
    type,
    minPrice,
    maxPrice,
    listedSince,
    buildingType
  ]);
  return (
    <div className="hero">
      <h1 className="title">Welcome to DealFinder.js!</h1>
      <p className="description">
        This is a page that helps you to find your next home or investment
      </p>
      <PropertyList listings={listings} />
    </div>
  );
};

export default Welcome;
