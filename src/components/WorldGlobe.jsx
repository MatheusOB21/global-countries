import React, { useRef, useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import countries from '../data/countries.json';

export default function WorldGlobe({ countryCode }) {
  const globeEl = useRef();
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    setCountriesData(countries.features);
  }, []);

  const handleCountryClick = (country) => {
    const [lat, lng] = country.geometry.coordinates[0][0];
    globeEl.current.pointOfView({ lat, lng, altitude: 1.5 }, 1000);
  };

  return (
    <Globe
      ref={globeEl}
      width={800}
      height={'100%'}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      polygonsData={countriesData}
      polygonAltitude={0.01}
      polygonCapColor={() => 'rgba(200, 0, 0, 0.6)'}
      polygonSideColor={() => 'rgba(255, 255, 255, 0.2)'}
      polygonStrokeColor={() => '#111'}
      polygonLabel={({ properties: d }) => `${d.name}`}
      onPolygonClick={handleCountryClick}
    />
  );
}

