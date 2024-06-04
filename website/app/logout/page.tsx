"use client";

import { removeToken, removeUser } from "@/utils/token";
import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const logout = () => {
    removeToken();
    removeUser();
    router.push("/");
  };

  return (
    <Container
      sx={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" sx={{ my: 1 }}>
        Logout
      </Typography>
      <Typography variant="body1">Do you really want to Logout?</Typography>

      <ButtonGroup
        variant="contained"
        sx={{ my: 2, width: "50%" }}
        disableElevation
      >
        <Button color="error" onClick={logout} fullWidth>
          Yes
        </Button>
        <Button href="/" fullWidth>
          No
        </Button>
      </ButtonGroup>
    </Container>
  );
}
