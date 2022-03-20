import React from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

const IS_PROD = process.env.NODE_ENV === "production";

const USERLIST_KEY = IS_PROD
  ? "d21dbf05-1525-4323-a256-327355066f92"
  : "b199b263-3262-435f-a9bc-96a12aa9955d";
const ACTION = `https://forms.userlist.com/${USERLIST_KEY}/submissions`;

export const NewsletterForm = ({ sx, action = ACTION, ...props }) => {
  return (
    <Box
      component="form"
      action={action}
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
