import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowOutwardTwoToneIcon from "@mui/icons-material/ArrowOutwardTwoTone";

export default function Hero() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          height: "80vh",
          display: "flex",
          alignItems: { xs: "center", md: "left" },
          justifyContent: "center",
          flexDirection: "column",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h2">
          Check the health of{" "}
          <Box sx={{ display: "inline", color: "#BDDDB0" }}>your skin</Box>
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          A comprehensive web-based clinical reference designed to aid the
          identifiction of skin diseases.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            px: 5,
            borderRadius: 5,
            letterSpacing: 2,
            mr: { xs: 0, md: "auto" },
            boxShadow: "0px 10px 20px 0px #BDDDB0",
          }}
          endIcon={<ArrowOutwardTwoToneIcon />}
        >
          Find out
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <Box
          component="img"
          src="/hero.png"
          alt="hero"
          sx={{ height: "100%", objectFit: "contain" }}
        />
      </Grid>
    </Grid>
  );
}
