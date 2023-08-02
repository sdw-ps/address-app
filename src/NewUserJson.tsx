import React from "react";
import { JsonViewer } from "@textea/json-viewer";
import { Box } from "@mui/material";

interface IProps {
  displayCountry?: boolean;
}

const data = {
  name: "Tom",
  phoneNumber: "123456",
};

const data2 = {
  name: "Tom",
  phoneNumber: "123456",
  countryId: 2,
};

const countryData = [
  {
    country: "France",
    countryId: 1,
  },
  {
    country: "UK",
    countryId: 2,
  },
];

export function NewUserJson({ displayCountry }: IProps): React.JSX.Element {
  return (
    <Box>
      <h3>Example Data</h3>
      {displayCountry && (
        <>
          <Box>
            <pre>Endpoint: GET http://localhost:5005/countries</pre>
          </Box>
          <JsonViewer value={countryData} theme="dark" />
        </>
      )}
      <Box>
        <pre>Endpoint: POST http://localhost:5005/users</pre>
      </Box>
      <JsonViewer value={displayCountry ? data2 : data} theme="dark" />
    </Box>
  );
}
