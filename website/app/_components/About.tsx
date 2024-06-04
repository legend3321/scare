import { Box, Grid, Typography } from "@mui/material";
import AccessTimeFilledTwoToneIcon from "@mui/icons-material/AccessTimeFilledTwoTone";
import FilterNoneTwoToneIcon from "@mui/icons-material/FilterNoneTwoTone";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import Groups2TwoToneIcon from "@mui/icons-material/Groups2TwoTone";

export default function About() {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" textAlign={"center"}>
        About Us
      </Typography>
      <Grid container spacing={10} sx={{ pt: 5 }}>
        <Grid item xs={12} md={3}>
          <AccessTimeFilledTwoToneIcon
            fontSize="large"
            sx={{ mx: "auto", color: "primary.main" }}
          />
          <Typography variant="body1" sx={{ textAlign: "justify", mt: 3 }}>
            Helps you quickly analyze a skin lesion. It works in a similar way
            to a textbook, where you might find an image that looks like your
            skin problem. But while looking this up in a textbook would take a
            lot of time, this web-app does it in an instant!
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <FilterNoneTwoToneIcon
            fontSize="large"
            sx={{ mx: "auto", color: "primary.main" }}
          />
          <Typography variant="body1" sx={{ textAlign: "justify", mt: 3 }}>
            Designed to be more than a one-disease app. We have 12,000 diagnosed
            images and growing. We are beginning trials to review our accuracy
            as a diagnostic aid for skin cancer lesions (melanoma).
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <PublicTwoToneIcon
            fontSize="large"
            sx={{ mx: "auto", color: "primary.main" }}
          />
          <Typography variant="body1" sx={{ textAlign: "justify", mt: 3 }}>
            Our aim is to provide a simple, inexpensive software system to
            identify potentially all types of skin lesions using a web-app-based
            platform.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Groups2TwoToneIcon
            fontSize="large"
            sx={{ mx: "auto", color: "primary.main" }}
          />
          <Typography variant="body1" sx={{ textAlign: "justify", mt: 3 }}>
            Our system's algorithm is unique among smartphone applications,
            using sophisticated CBIR (content based image recognition)
            technology to discriminate skin-lesion types.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
