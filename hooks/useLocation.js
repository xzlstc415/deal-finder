import { useState } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  return [location, setLocation];
};

export default useLocation;
