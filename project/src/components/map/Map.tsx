import { useEffect, useRef, } from 'react';
import leaflet, { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { MapPropType } from '../../types/map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';

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

function Map({ offers, height, activeOffer, className, typeView }: MapPropType): JSX.Element {
  const city = useAppSelector(state => state.offers.city)
  const newOffer = offers.find(offer => offer.city.name === city)


  const mapRef = useRef(null);

  const coord = {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    },
    name: "Paris",
  };

  const map = useMap(mapRef, coord);

  useEffect(() => {
    if (map) {
      const markers = document.querySelector('.map')?.getElementsByClassName('leaflet-marker-icon leaflet-zoom-animated leaflet-interactive')

      if (markers?.length) (
        Array.from(markers).forEach(it => it.remove())
      )
      if(newOffer) {
        map.setView({ lat: newOffer.location.latitude, lng: newOffer.location.longitude })
      }

      // debugger
      // Небольшой костылик, не придумал сходу как разрулить более красиво
      if (typeView === 'room') {
        offers.forEach(({ id, location: { latitude, longitude } }) => {
          const marker = new Marker({ lat: latitude, lng: longitude });
          marker
            .setIcon(activeOffer !== 0 && id === activeOffer ? currentCustomIcon : defaultCustomIcon)
            .addTo(map);
        });
      } else {
        offers.forEach(({ id, location: { latitude, longitude } }) => {
          const marker = new Marker({ lat: latitude, lng: longitude });
          marker
            .setIcon(activeOffer !== 0 && id === activeOffer ? currentCustomIcon : defaultCustomIcon)
            .addTo(map);
        });
      }
    }
  }, [map, offers, city]);


  return (<section className={className} style={{ height: height + 'px' }} ref={mapRef}></section>);
}

export default Map;
