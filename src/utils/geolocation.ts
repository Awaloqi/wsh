type Point = {
  lat: number;
  lng: number;
};

const METERS_IN_MILE = 1609.34;
const EARTH_RADIUS_IN_METERS = 6378137;

export const metersToMiles = (km: number) => km / METERS_IN_MILE;
const gradToRad = (x: number) => (x * Math.PI) / 180;

export const distanceBetweenPoints = (p1: Point, p2: Point) => {
  const dLat = gradToRad(p2.lat - p1.lat);
  const dLong = gradToRad(p2.lng - p1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(gradToRad(p1.lat)) * Math.cos(gradToRad(p2.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS_IN_METERS * c;
};
