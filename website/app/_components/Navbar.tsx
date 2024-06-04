import {
  AppBar,
  Box,
  MenuItem,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        fontFamily: "DM Sherif Display, serif",
      }}
      elevation={0}
    >
      <Toolbar>
        <Container sx={{ display: "flex" }}>
          <Typography
            variant="h6"
            color={"primary"}
            sx={{ py: 1, letterSpacing: 3 }}
          >
            SCare
          </Typography>

          <Box sx={{ display: "flex", mx: 3, ml: "auto" }}>
            <MenuItem>Login</MenuItem>
            <MenuItem>Signup</MenuItem>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
