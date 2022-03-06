import {useEffect, useRef} from 'react';
import leaflet, {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { MapPropType } from '../../types/map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

function Map({ offers, height, activeOffer, className }: MapPropType): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    if (map) {
      
      const markers = document.querySelector('.map')?.getElementsByClassName('leaflet-marker-icon leaflet-zoom-animated leaflet-interactive')
      if(markers?.length)(
        Array.from(markers).forEach(it => it.remove())
      )

      offers.forEach(({ id, location: { latitude, longitude } }) => {
        const marker = new Marker({ lat: latitude, lng: longitude });
        marker
          .setIcon(activeOffer !== 0 && id === activeOffer ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);


  return (<section className={className} style={{ height: height + 'px'}} ref={mapRef}></section>);
}

export default Map;