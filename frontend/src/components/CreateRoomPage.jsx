import React, { useState } from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from "@mui/material";

const CreateRoomPage = () => {
  const [guestCanPause, setGuestCanPause] = useState(true);
  const [votesToSkip, setVotesToSkip] = useState(2);

  const handleGuestCanPauseChange = (event) => {
    setGuestCanPause(event.target.value === "yes");
  };

  const handleVotesToSkipChange = (event) => {
    setVotesToSkip(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log({ guestCanPause, votesToSkip });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ padding: "2rem", backgroundColor: "#f5f5f5" }}
    >
      <Typography variant="h4" component="h1" color="primary">
        Create Room Page
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: 3,
        }}
      >
        {/* Guest Can Pause Radio Buttons */}
        <Typography variant="subtitle1" color="textSecondary">
          Can Guests Pause the Music?
        </Typography>
        <RadioGroup
          value={guestCanPause ? "yes" : "no"}
          onChange={handleGuestCanPauseChange}
          row
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>

        {/* Votes to Skip Field */}
        <TextField
          label="Votes Required to Skip"
          type="number"
          value={votesToSkip}
          onChange={handleVotesToSkipChange}
          inputProps={{ min: 1 }} // Ensure minimum value of 1
          fullWidth
          variant="outlined"
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Create Room
        </Button>
      </Box>
    </Box>
  );
};

export default CreateRoomPage;
