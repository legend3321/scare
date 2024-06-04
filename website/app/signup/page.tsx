"use client";
import api from "@/utils/api";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    if (!username || !password || !firstname || !lastname || !email) {
      setError("Please fill all the fields");
      return;
    }

    setError("");
    handleOpen();
    console.log(username, password);

    api
      .post("signup/", {
        username,
        password,
        first_name: firstname,
        last_name: lastname,
        email,
      })
      .then((res) => {
        setError("User created successfully.");
        handleClose();
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      })
      .catch((err) => {
        setError("A user with this username already exists.");
        handleClose();
      });
  };

  return (
    <Container sx={{ py: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} />
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">
            Create a new{" "}
            <Box sx={{ display: "inline", color: "primary.main" }}>Account</Box>
          </Typography>
          <Typography variant="body1">
            Provide details to register yourself.
          </Typography>
          <TextField
            label="Email"
            type="email"
            fullWidth
            sx={{ mt: 4 }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="First Name"
            fullWidth
            sx={{ mt: 2 }}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            label="Last Name"
            fullWidth
            sx={{ mt: 2 }}
            onChange={(e) => setLastname(e.target.value)}
          />
          <TextField
            label="Username"
            fullWidth
            sx={{ mt: 2 }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            sx={{ mt: 2 }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            disableElevation
            color="primary"
            fullWidth
            sx={{ mt: 4 }}
            onClick={handleSubmit}
          >
            Signup
          </Button>
          <Typography
            variant="body2"
            textAlign={"center"}
            color="error"
            sx={{ mt: 2 }}
          >
            {error}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} />
      </Grid>
      <Backdrop sx={{ color: "primary.main", zIndex: 999 }} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
