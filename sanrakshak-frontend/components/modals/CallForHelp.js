import React, { useEffect, useState } from "react";
import geoLocation from "../common/socialMedia/geolocation.js";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl";
import { MapContainer, TileLayer, GeoJSON, Popup, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Cookies from 'js-cookie';

const CallForHelp = ({ visible, onClose = () => { }, callback = () => { }, data }) => {
  const [location, setLocation] = useState({
    loaded: false,
    coords: { lat: "", lng: "" },
  });
  const [polLoc, setpolLoc] = useState();
  const [geojsonData, setGeojsonData] = useState(null);
  const locationData = geoLocation(setLocation);


  const gpsdata = async () => {
    try {
      const token = Cookies.get('accessToken');
      const response = await axios.post(
        `${ApiUrl}/api/calcDis?token=${token}`,
        {
          userLat: location.coords.lat,
          userLng: location.coords.lng,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Response Data: ");
      console.log(response.data);
      setGeojsonData(response.data.distance);
      setpolLoc(response.data.policeLoc);
    } catch (error) {
      console.error("Error fetching GeoJSON data:", error);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && locationData.loaded) {
      console.log(locationData.coords);
      gpsdata();
    }
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  if (!visible) return null;

  // User marker icon
  const userMarkerIcon = new L.Icon({
    iconUrl: "https://postimg.cc/YhLV5S0J",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div
      id="background"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.id === "background") onClose();
      }}
    >
      <div className="flex w-[60rem] h-[45rem] px-[2rem] py-[2rem] register-fir-bg">
        <MapContainer
          center={[location.coords.lat, location.coords.lng]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "650px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* User Marker */}
          {/* {locationData.loaded && (
            <Marker icon={userMarkerIcon} position={[location.coords.lat, location.coords.lng]}>
              <Popup>User Location</Popup>
            </Marker>
          )} */}

          {/* Police Marker */}
          {/* {polLoc && (
            <Marker icon={userMarkerIcon} position={[polLoc.lat, polLoc.lng]}>
              <Popup>Police Location</Popup>
            </Marker>
          )} */}

          {geojsonData && <GeoJSON data={geojsonData} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default CallForHelp;