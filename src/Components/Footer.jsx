import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",

        display: "flex",
        alignItems: "center",

        justifyContent: {
          xs: "flex-start", // mobile → left side
          sm: "center", // desktop → center
        },

        pl: {
          xs: 2,
          sm: 0,
        },
        py: 2,
        backgroundColor: "#E58F7C",
        color: "white",
        zIndex: 500,
      }}
    >
      <Typography variant="body2">Copyright ⓒ {year}</Typography>
    </Box>
  );
}

export default Footer;
