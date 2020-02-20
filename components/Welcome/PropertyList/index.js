const PropertyList = ({ listings }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return (
    <div className="listings-wrapper">
      {listings.map((listing, index) => (
        <div className="listing-container" index={index}>
          <div
            className="listing-thumbnail"
            style={{ backgroundImage: `url(${listing.thumbnail})` }}
          />
          <div className="listing-summary">
            <div className="price summary-item">
              {formatter.format(listing.price)}
            </div>
            <div className="summary-item">
              {listing.bedrooms || 0} Beds &nbsp;{listing.bathrooms || 0} Baths
            </div>
            <div className="summary-item">{listing.location}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
