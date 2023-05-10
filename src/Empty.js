import React from "react";

const Empty = ({ refresh }) => {
  return (
    <button className="btn" onClick={refresh}>
      refresh
    </button>
  );
};

export default Empty;
