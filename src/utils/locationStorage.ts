export const loadLocations = (): string[] => {
    const data = localStorage.getItem('locations');
    return data ? JSON.parse(data) : [];
  };
  
  export const saveLocations = (locations: string[]) => {
    localStorage.setItem('locations', JSON.stringify(locations));
  };
  