//@ts-nocheck
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./map.styles.css";

const Map = () => {
  const locateMapCenter = {
    lat: 40.7282702,
    lng: -73.9506774,
  };
  return (
    <div className="map-container">
      <LoadScript id="script-loader" googleMapsApiKey={API_KEY}>
        <GoogleMap
          id="circle-example"
          mapContainerStyle={{
            height: "100%",
            overflow: "hidden",
            borderRadius: "20px",
            border: "solid #0d0a92 2px",
            boxShadow: "0 1rem 2rem rgba(0,0,0,.8)",
          }}
          zoom={12}
          center={locateMapCenter}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(Map);
