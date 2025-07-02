import React, { useState } from 'react';
import { ClipLoader } from "react-spinners";

function Loader() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="sweet-loading">
      <ClipLoader
        color="#000"
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
