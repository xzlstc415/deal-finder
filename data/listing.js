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
    thumbnail:
      'https://media.wesc.mlxmatrix.com/mediaserver/GetMedia.ashx?Key=12001227&TableID=9&Type=1&Number=0&Size=2&exk=5e6bf15543c2c5e51622eda0d88c3089'
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
    thumbnail:
      'https://media.wesc.mlxmatrix.com/mediaserver/GetMedia.ashx?Key=11995444&TableID=9&Type=1&Number=0&Size=2&exk=cdf225231c4f580453a1100a7420b07c'
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
    thumbnail:
      'https://media.wesc.mlxmatrix.com/mediaserver/GetMedia.ashx?Key=11919981&TableID=9&Type=1&Number=0&Size=2&exk=05e65463d8c7c9679c28e71c16fd42fb'
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
    thumbnail:
      'https://media.wesc.mlxmatrix.com/mediaserver/GetMedia.ashx?Key=11843183&TableID=9&Type=1&Number=0&Size=2&exk=7e723e47e42049746aee86a5d856192f'
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
    thumbnail:
      'https://media.wesc.mlxmatrix.com/mediaserver/GetMedia.ashx?Key=11804136&TableID=9&Type=1&Number=0&Size=2&exk=32141f6ae0b53bc71b308bd0fa21bf78'
  }
];

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
    result = result.findByLocation(location);
  }
  if (bedrooms) {
    result = result.findByBedrooms(bedrooms);
  }
  if (bathrooms) {
    result = result.findByBathrooms(bathrooms);
  }
  if (type) {
    result = result.findByType(type);
  }
  if (minPrice) {
    result = result.findByMinPrice(minPrice);
  }
  if (maxPrice) {
    result = result.findByMaxPrice(maxPrice);
  }
  if (listedSince) {
    result = result.findByListedSince(listedSince);
  }
  if (buildingType) {
    result = result.findByBuildingType(buildingType);
  }
  if (mlsNumber) {
    result = result.findByMlsNumber(mlsNumber);
  }
  return result;
};
