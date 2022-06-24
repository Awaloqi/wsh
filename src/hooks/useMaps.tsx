import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { captureException, captureMessage } from '@sentry/react';

import { GOOGLE_PLACES_API_KEY } from '../constants';

type Maps = typeof google.maps;

const MapsContext = createContext<null | Maps>(null);

const loader = new Loader({
  apiKey: GOOGLE_PLACES_API_KEY,
  version: 'quarterly',
  libraries: ['places'],
  language: 'en',
});

export const MapsProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [maps, setMaps] = useState<null | Maps>(null);

  useEffect(() => {
    if (navigator.userAgent === 'ReactSnap') {
      console.log('Skip loading google maps with react-snap');
      return;
    }
    if (GOOGLE_PLACES_API_KEY.length === 0) {
      captureMessage('Google maps api key was not provided');
      return;
    }
    loader
      .load()
      .then(() => {
        setMaps(google.maps);
      })
      .catch(captureException);
  }, []);

  return <MapsContext.Provider value={maps}>{children}</MapsContext.Provider>;
};

export const useMaps = () => {
  return useContext(MapsContext);
};
