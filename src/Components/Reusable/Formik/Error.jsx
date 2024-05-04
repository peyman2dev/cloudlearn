import React from "react";

export default function Error({touch, err}) {
  return (
    <>
      {touch && err && (
        <div className="error">* {err}</div>
      )}
    </>
  );
}
