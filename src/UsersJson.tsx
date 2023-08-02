import React from "react";
import { JsonViewer } from "@textea/json-viewer";
import { Box } from "@mui/material";

interface IProps {
  displayCountry?: boolean;
}

const data = [
  {
    id: 1,
    name: "Charles Higgins",
    phoneNumber: "+33 456321",
  },
  {
    id: 2,
    name: "Amanda Peterson",
    phoneNumber: "+44 523452",
  },
];

const data2 = [
  {
    id: 1,
    name: "Charles Higgins",
    phoneNumber: "+33 456321",
    country: "France",
  },
  {
    id: 2,
    name: "Amanda Peterson",
    phoneNumber: "+44 523452",
    country: "UK",
  },
];

export function UsersJson({ displayCountry }: IProps): React.JSX.Element {
  return (
    <Box>
      <h3>Example Data</h3>
      <Box>
        <pre>Endpoint: GET http://localhost:5005/users</pre>
      </Box>
      <JsonViewer value={displayCountry ? data2 : data} theme="dark" />
      <Box>
        <pre>Endpoint: DELETE http://localhost:5005/users/{"{userId}"}</pre>
      </Box>
    </Box>
  );
}
