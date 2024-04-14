// geoLocation.js
import { useEffect, useState } from "react";

const GeoLocation = (setLocation) => {
  const [locationData, setLocationData] = useState({
    loaded: false,
    coords: { lat: "", lng: "" },
  });

  const onSuccess = (loc) => {
    setLocationData({
      loaded: true,
      coords: {
        lat: loc.coords.latitude,
        lng: loc.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocationData({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  useEffect(() => {
    // Log the updated location whenever it changes
    console.log(locationData);
    // You can also set the location in the CallForHelp component state if needed
    setLocation(locationData);
  }, [locationData, setLocation]);

  return locationData;
};

export default GeoLocation;
