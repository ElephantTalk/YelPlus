import React from "react";

const Errors = ({ errors }) => (
  <ul>
    {errors.map((error, i) => {
      <li key={`error-${i}`}>{error}</li>;
    })}
  </ul>
);
