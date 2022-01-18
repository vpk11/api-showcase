import React from "react";

const CsrfInput = () => {
  const token = $('meta[name="csrf-token"]').attr("content");

  return (
    <input
      type="hidden"
      name="authenticity_token"
      value={token}
      readOnly={true}
    />
  );
};

export default CsrfInput;
