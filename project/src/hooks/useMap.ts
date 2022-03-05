import { useEffect, useState, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const { location: { latitude, longitude, zoom } } = city;
      const instance = new Map(mapRef.current, {
        center: { lat: latitude, lng: longitude },
        zoom,
      });

      const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png');
      instance.addLayer(layer);
      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;