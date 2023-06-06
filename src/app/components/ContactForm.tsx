"use client";

import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function ContactForm({
  formSparkUrl,
}: {
  formSparkUrl: string;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    fetch(formSparkUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        website,
        phone,
        message,
      }),
    })
      .then((response) => {
        setSubmitting(false);
        if (!response.ok) {
          enqueueSnackbar(
            <Typography>There was an error. Please try again!</Typography>,
            {
              variant: "error",
            }
          );
          return;
        }

        enqueueSnackbar(<Typography>Submitted successfully!</Typography>, {
          variant: "success",
        });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    console.log("Submitted");
  }

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: "540px" }}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <TextField
          id="first-name"
          value={firstName}
          type="text"
          label="First name"
          required
          variant="filled"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <TextField
          id="last-name"
          type="text"
          value={lastName}
          required
          variant="filled"
          label="Last name"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          required
          value={email}
          variant="filled"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          id="phone"
          label="Phone number"
          type="phone"
          value={phone}
          required
          variant="filled"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <TextField
          variant="filled"
          id="website"
          label="Website"
          type="text"
          className="col-span-2"
          value={website}
          onChange={(event) => {
            setWebsite(event.target.value);
          }}
        />
        <TextField
          id="message"
          label="Message"
          type="text"
          multiline
          rows={5}
          className="col-span-2"
          required
          variant="filled"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <Button type="submit" variant="contained" className="col-span-2">
          {!submitting && "Let's talk"}
          {submitting && <CircularProgress size={24} color="secondary" />}
        </Button>
      </div>
    </form>
  );
}
