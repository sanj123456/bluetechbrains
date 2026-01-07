// GlobeComponent.js
"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import * as topojson from "topojson-client";
import "./glob.scss";
import landTopology from "./globData/land_10m.json";

const markerSvgBig = `<svg width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#FF3D00"></path></g></svg>`;

const markerSvg = `<svg width="15px" height="15px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#FF3D00"></path></g></svg>`;

const min = 1000;
const max = 4000;
const pointsData = [
  { name: "Ahmedabad", lat: 23.0225, lng: 72.5714, mySvg: markerSvgBig },
  { name: "USA", lat: 37.0902, lng: -95.7129, mySvg: markerSvg },
  { name: "UK", lat: 55.3781, lng: -3.436, mySvg: markerSvg },
  { name: "Australia", lat: -25.2744, lng: 133.7751, mySvg: markerSvg },
  { name: "Canada", lat: 56.1304, lng: -106.3468, mySvg: markerSvg },
  { name: "EU", lat: 50.8503, lng: 4.3517, mySvg: markerSvg },
  { name: "Netherlands", lat: 52.3676, lng: 4.9041, mySvg: markerSvg },
  { name: "Ireland", lat: 53.1424, lng: -7.6921, mySvg: markerSvg },
  { name: "India", lat: 20.5937, lng: 78.9629, mySvg: markerSvg },
  { name: "Belgium", lat: 50.8503, lng: 4.3517, mySvg: markerSvg },
  { name: "Germany", lat: 51.1657, lng: 10.4515, mySvg: markerSvg },
  { name: "Denmark", lat: 56.2639, lng: 9.5018, mySvg: markerSvg },
  { name: "Finland", lat: 61.9241, lng: 25.7482, mySvg: markerSvg },
  { name: "Italy", lat: 41.8719, lng: 12.5674, mySvg: markerSvg },
  { name: "France", lat: 46.6034, lng: 1.8883, mySvg: markerSvg },
  { name: "Spain", lat: 40.4637, lng: -3.7492, mySvg: markerSvg },
  { name: "New Zealand", lat: -40.9006, lng: 174.886, mySvg: markerSvg },
  { name: "South Africa", lat: -30.5595, lng: 22.9375, mySvg: markerSvg },
  { name: "Haiti", lat: 18.9712, lng: -72.2852, mySvg: markerSvg },
  { name: "UAE", lat: 23.4241, lng: 53.8478, mySvg: markerSvg },
  { name: "Israel", lat: 31.0461, lng: 34.8516, mySvg: markerSvg },
];

const ahmedabad = { lat: 23.0225, lng: 72.5714 };

const calculateArcsData = () =>
  pointsData.map((country) => ({
    startLat: ahmedabad.lat,
    startLng: ahmedabad.lng,
    endLat: country.lat,
    endLng: country.lng,
    time: Math.floor(Math.random() * (max - min + 1) + min),
    color: ["#ffffff00", "#faf7e6", "#ffffff00"],
  }));

const GlobeComponent = () => {
  const globeRef = useRef(null);
  const controlsRef = useRef(null);
  const [globeReady, setGlobeReady] = useState(false);
  const [globWidth, setGlobWidth] = useState(window.innerWidth);
  const [globHeight, setGlobHeight] = useState(500);

  useEffect(() => {
    if (globeRef.current && globeReady) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;

      globeRef.current.pointOfView(
        { lat: 20.5937, lng: 78.9629, altitude: 1.8 },
        0
      );
      controlsRef.current = controls;
    }
  }, [globeReady]);

  const handleGlobeReady = () => {
    setGlobeReady(true);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 600) {
        setGlobWidth(400);
        setGlobHeight(400);
      } else {
        setGlobWidth(window.innerWidth);
        setGlobHeight(500);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize(); // Initial call
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const memoizedArcsData = useMemo(() => calculateArcsData(), []);

  const handleMarkerHover = (hover) => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !hover;
    }
  };

  return (
    <div className="cursor-move-main">
      <Globe
        ref={globeRef}
        width={globWidth}
        height={globHeight}
        atmosphereAltitude={0}
        onGlobeReady={handleGlobeReady}
        enableZoomPanInteraction={false}
        enablePointerInteraction={false}
        backgroundColor="#00000000"
        rendererConfig={{ antialias: true, alpha: true }}
        globeMaterial={
          new THREE.MeshPhongMaterial({
            color: "#FAF8F5",
            opacity: 0.95,
            transparent: true,
          })
        }
        atmosphereColor="#ffffff00"
        pointsData={pointsData}
        pointAltitude={0.01}
        pointRadius={0.2}
        pointResolution={5}
        pointColor={() => "#eed31f"}
        arcsData={memoizedArcsData}
        arcAltitudeAutoScale={0.3}
        arcColor="color"
        arcStroke={0.5}
        arcDashGap={2}
        arcDashAnimateTime="time"
        onArcComplete={(arc) => console.log("Arc rendered:", arc)}
        polygonsData={
          topojson.feature(landTopology, landTopology.objects.land).features
        }
        polygonSideColor={() => "#A2D5F2"}
        polygonCapMaterial={
          new THREE.MeshPhongMaterial({
            color: "#228B22",
            side: THREE.DoubleSide,
          })
        }
        polygonAltitude={0.01}
        customLayerData={[...Array(500).keys()].map(() => ({
          lat: (Math.random() - 1) * 360,
          lng: (Math.random() - 1) * 360,
          altitude: Math.random() * 2,
          size: Math.random() * 0.4,
          color: "#faadfd",
        }))}
        customThreeObject={(sliceData) => {
          const { size, color } = sliceData;
          return new THREE.Mesh(
            new THREE.SphereGeometry(size),
            new THREE.MeshBasicMaterial({ color })
          );
        }}
        customThreeObjectUpdate={(obj, sliceData) => {
          const { lat, lng, altitude } = sliceData;
          Object.assign(
            obj.position,
            globeRef.current?.getCoords(lat, lng, altitude)
          );
        }}
        htmlElementsData={pointsData}
        htmlElement={(d) => {
          const el = document.createElement("div");
          el.innerHTML = d.mySvg;
          el.style.color = "red";
          el.style["pointer-events"] = "auto";
          el.style.cursor = "pointer";

          // Create tooltip
          const tooltip = document.createElement("div");
          tooltip.innerText = d.name;
          tooltip.style.position = "absolute";
          tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
          tooltip.style.color = "white";
          tooltip.style.padding = "5px";
          tooltip.style.borderRadius = "3px";
          tooltip.style.fontSize = "12px";
          tooltip.style.display = "none"; // Hide by default
          tooltip.style.pointerEvents = "none"; // Prevent interaction
          el.appendChild(tooltip);

          el.onmouseover = () => {
            tooltip.style.display = "block";
            handleMarkerHover(true);
          };
          el.onmouseout = () => {
            tooltip.style.display = "none";
            handleMarkerHover(false);
          };

          return el;
        }}
      />
    </div>
  );
};

export default GlobeComponent;
