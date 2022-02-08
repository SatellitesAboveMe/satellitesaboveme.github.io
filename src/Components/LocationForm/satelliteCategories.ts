interface SatelliteCategory {
    name: string;
    id: number;
}

export const satelliteCategories: SatelliteCategory[] = [
  { name: 'Brightest', id: 1 },
  { name: 'ISS', id: 2 },
  { name: 'Weather', id: 3 },
  { name: 'NOAA', id: 4 },
  { name: 'GOES', id: 5 }
]
