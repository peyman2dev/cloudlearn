import React, { useEffect, useState } from "react";

export default function Error({ errors, target }) {

  return <>{errors[target] && 
    <p className="text-sm mb-2 text-red-500">  
        {errors[target].message}
    </p>
  }</>;
}
