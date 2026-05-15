import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import Tooltip from "@mui/material/Tooltip";

function Header({ deleteCompleted }) {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          align="left"
          sx={{ fontWeight: 700, color: "text.primary" }}
        >
          Today's Tasks
        </Typography>

        <Typography
          variant="subtitle1"
          align="left"
          sx={{
            mt: 0.5,
            ml: 1,
            color: "text.secondary",
            fontWeight: 500,
          }}
        >
          {today}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: "auto",

          alignItems: {
            xs: "center", // 👈 mobile center
            sm: "center", // keep same or change if needed
          },

          textAlign: "center",
        }}
      >
        <Tooltip title="Clear all finished tasks 🧹" arrow>
          <IconButton
            onClick={deleteCompleted}
            sx={{
              right: "18px",
              top: "8px",
              backgroundColor: "white",
              border: "2px solid #E58F7C",
              color: "#E58F7C",

              "&:hover": {
                backgroundColor: "#E58F7C",
                color: "white",
              },
            }}
          >
            <DeleteSweepIcon sx={{ fontSize: 35 }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default Header;
