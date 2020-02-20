import { useState } from 'react';

const useBedrooms = () => {
  const [bedrooms, setBedrooms] = useState(null);
  return [bedrooms, setBedrooms];
};

export default useBedrooms;
