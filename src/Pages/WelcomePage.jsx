import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        bgcolor: "#A8D5D0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <img
        src="/Bunny.png"
        alt="Bunny"
        style={{
          width: "clamp(180px, 40vw, 300px)",
          animation: "float 3s ease-in-out infinite",
        }}
      />

      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: "#011638",
          mt: 2,
          fontSize: {
            xs: "2rem",
            sm: "3rem",
            md: "4rem",
          },
        }}
      >
        Bunny Tasks 🐰
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          mt: 4,
          borderRadius: "999px",
          px: 5,
          py: 1.5,
          fontWeight: 700,
        }}
        onClick={() => navigate("/app")}
      >
        Start Planning 🌸
      </Button>
    </Box>
  );
}

export default WelcomePage;
