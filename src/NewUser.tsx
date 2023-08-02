import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Box,
} from "@mui/material";
import { route } from "./Navigation/route";
import { NewUserJson } from "./NewUserJson";

interface Country {
  country: string;
  countryId: number;
}

interface NewUserProps {
  displayCountry?: boolean;
}

export const NewUser: React.FC<NewUserProps> = ({ displayCountry }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryId, setCountryId] = useState<number | "">("");
  const [countries, setCountries] = useState<Country[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (displayCountry) {
      const getCountries = async () => {
        const response = await axios.get("http://localhost:5005/countries");
        setCountries(response.data);
      };
      getCountries();
    }
  }, [displayCountry]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const userData: any = {
      name,
      phoneNumber,
    };

    if (displayCountry) {
      userData.countryId = countryId;
    }

    await axios.post("http://localhost:5005/users", userData);
    navigate(displayCountry ? route.users2.to() : route.users.to());
  };

  return (
    <Box>
      <Paper style={{ padding: "1rem", margin: "1rem 0" }}>
        <form onSubmit={handleSubmit}>
          <Box>
            <TextField
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              sx={{ width: "100%" }}
            />
          </Box>
          <Box>
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              sx={{ width: "100%" }}
            />
          </Box>
          {displayCountry && (
            <Box paddingY={1}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                  labelId="country-label"
                  id="country-select"
                  value={countryId}
                  onChange={(event) =>
                    setCountryId(event.target.value as number)
                  }
                  sx={{ width: "100%" }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.countryId} value={country.countryId}>
                      {country.country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}

          <Box marginTop={2}>
            <Button type="submit" variant="contained" sx={{ width: "100%" }}>
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
      <NewUserJson displayCountry={displayCountry} />
    </Box>
  );
};
