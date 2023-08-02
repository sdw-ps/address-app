import React from "react";
import { JsonViewer } from "@textea/json-viewer";
import { Box } from "@mui/material";

interface IProps {}

const data = [
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

export function UsersJson({}: IProps): React.JSX.Element {
  return (
    <Box>
      <h3>Example Data</h3>
      <Box>
        <pre>Endpoint: http://localhost:5005/users</pre>
      </Box>
      <JsonViewer value={data} theme="dark" rootName="" />
    </Box>
  );
}
