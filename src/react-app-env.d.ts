/// <reference types="react-scripts" />
declare module '@szhsin/react-menu';
declare module 'react-responsive';
declare module 'react-input-mask';
declare module 'parse-google-place' {
  export default function (
    gmpas?: google.maps.GeocoderResult,
  ): {
    address: string;
    city: string;
    countryLong: string;
    countryShort: string;
    county: string;
    stateLong: string;
    stateShort: string;
    streetName: string;
    streetNumber: string;
    zipCode: string;
  };
}
