import React from "react";

function MapComponent() {
  return (
    <div className="font-roundkey h-[70vh] bg-mapBackground bg-cover">
      <iframe
        src="https://snazzymaps.com/embed/593679"
        className="h-[70vh] w-full border-none"
      ></iframe>
    </div>
  );
}

export default MapComponent;
