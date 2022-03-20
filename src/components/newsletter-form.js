import React from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const NewsletterForm = ({ sx, ...props }) => {
  function createEmail(event) {
    event.preventDefault();
    alert("POW! You've got mail 📧 📫");
  }

  return (
    <Box
      component="form"
      // onSubmit={createEmail}
      action="https://forms.userlist.com/b199b263-3262-435f-a9bc-96a12aa9955d/submissions"
      method="POST"
      acceptCharset="UTF-8"
      sx={{
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
      {...props}
    >
      <TextField
        label="Your first name"
        type="text"
        id="fields_first_name"
        name="fields[first_name]"
        sx={{ mb: 2 }}
        required
        fullWidth
      />
      <TextField
        label="Your best email"
        type="text"
        id="fields_email"
        name="fields[email]"
        autoComplete="email"
        sx={{ mb: 2 }}
        required
        fullWidth
      />

      <Button type="submit" variant="contained">
        Subscribe to the POW! Newsletter
      </Button>
    </Box>
  );
};
