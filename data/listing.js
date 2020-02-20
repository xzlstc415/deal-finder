const listings = [
  {
    id: 1,
    location: '36 Calverley St, Orillia ON M1C 3R5',
    bedrooms: 5,
    bathrooms: 3,
    type: 'Residential',
    price: 340000,
    listedSince: new Date('2020-02-19'),
    buildingType: 'Detached',
    mlsNumber: '1020401240',
    thumbnail: '/house3.jpeg'
  },
  {
    id: 2,
    location: '473 Brodhead St, Windsor ON N9A 3W3',
    bedrooms: 6,
    bathrooms: 2,
    type: 'Residential',
    price: 210000,
    listedSince: new Date('2020-02-01'),
    buildingType: 'Semi-Detached',
    mlsNumber: '12314145',
    thumbnail: '/house2.jpeg'
  },
  {
    id: 3,
    location: '2 Yonge St, Toronto ON L4C 1V4',
    bedrooms: 3,
    bathrooms: 1,
    type: 'Residential',
    price: 450000,
    listedSince: new Date('2020-01-12'),
    buildingType: 'Condo',
    mlsNumber: '12314145',
    thumbnail: '/house1.jpeg'
  },
  {
    id: 4,
    location: '2891 Jane St, Markham ON L8S F9A',
    bedrooms: 0,
    bathrooms: 0,
    type: 'Land',
    price: 890000,
    listedSince: new Date('2019-10-12'),
    buildingType: 'Land',
    mlsNumber: '14155113',
    thumbnail: '/land.jpeg'
  },
  {
    id: 5,
    location: '9999 Jane St, Markham ON L8S F9A',
    bedrooms: 0,
    bathrooms: 0,
    type: 'Commercial',
    price: 2300000,
    listedSince: new Date('2019-11-15'),
    buildingType: 'Plaza',
    mlsNumber: '99155113',
    thumbnail: '/plaza.jpeg'
  }
];

const findByBedrooms = (result, bedrooms) => {
  return result.filter(listing => {
    if (bedrooms.match(/\+$/)) {
      return listing.bedrooms >= parseInt(bedrooms.replace('+', ''));
    } else {
      return listing.bedrooms === parseInt(bedrooms);
    }
  });
};

const findByBathrooms = (result, bathrooms) => {
  return result.filter(listing => {
    if (bathrooms.match(/\+$/)) {
      return listing.bathrooms >= parseInt(bathrooms.replace('+', ''));
    } else {
      return listing.bathrooms === parseInt(bathrooms);
    }
  });
};

export const fetchListings = ({
  location,
  bedrooms,
  bathrooms,
  type,
  minPrice,
  maxPrice,
  listedSince,
  buildingType,
  mlsNumber
}) => {
  let result = listings;
  if (location) {
    result = findByLocation(result, location);
  }
  if (bedrooms) {
    result = findByBedrooms(result, bedrooms);
  }
  if (bathrooms) {
    result = findByBathrooms(result, bathrooms);
  }
  if (type) {
    result = findByType(result, type);
  }
  if (minPrice) {
    result = findByMinPrice(result, minPrice);
  }
  if (maxPrice) {
    result = findByMaxPrice(result, maxPrice);
  }
  if (listedSince) {
    result = findByListedSince(result, listedSince);
  }
  if (buildingType) {
    result = findByBuildingType(result, buildingType);
  }
  if (mlsNumber) {
    result = findByMlsNumber(result, mlsNumber);
  }
  return result;
};
