import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#A8D5D0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/Bunny.png"
        alt="Bunny"
        style={{
          width: "300px",
          animation: "float 3s ease-in-out infinite",
        }}
      />

      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          color: "#011638",
          mt: 2,
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