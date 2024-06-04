"use client";

import api from "@/utils/api";
import { getUser, setToken, setUser } from "@/utils/token";
import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    setError("");
    if (!username || !password) {
      setError("Please fill all the fields");
      return;
    }
    handleOpen();

    api
      .post("login/", { username, password })
      .then((res) => {
        setUser(res.data.user.username);
        setToken(res.data.token);
        setError("Login Successful");

        setTimeout(() => {
          router.push("/");
          handleClose();
        }, 2000);
      })
      .catch((err) => {
        setError("Invalid Credentials");
        handleClose();
      });
  };

  return (
    <Container sx={{ py: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} />
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Welcome Back!!</Typography>
          <Typography variant="body1">
            Use your username and password to authenticate yourself.
          </Typography>
          <TextField
            label="Username"
            fullWidth
            sx={{ mt: 4 }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            sx={{ mt: 2 }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            variant="contained"
            disableElevation
            color="primary"
            fullWidth
            sx={{ mt: 4 }}
            onClick={handleSubmit}
          >
            Login
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
