import { getUser } from "@/utils/token";
import {
  AppBar,
  Box,
  MenuItem,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import Link from "next/link";

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
          <Link href="/">
            <Typography
              variant="h6"
              color={"primary.dark"}
              sx={{ py: 1, letterSpacing: 1 }}
            >
              SCare
            </Typography>
          </Link>

          <Box sx={{ display: "flex", mx: 3, ml: "auto" }}>
            <Link href="/login">
              <MenuItem>Login</MenuItem>
            </Link>
            <Link href="/signup">
              <MenuItem>Signup</MenuItem>
            </Link>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
