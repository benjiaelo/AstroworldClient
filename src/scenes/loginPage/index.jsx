import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import styles from "./auth.css";
import loginImg from "./login.png";
import backgroundImg from "./back.png";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "blue",
        }}>
        <Box
          style={{
            width: "35rem",
            lineHeight: 10,
            padding: 40,
            animation: "slide-up 0.5s ease",
            position: "absolute",
            left: "100px",
          }}
          width="100%"
          p="1rem 6%"
          textAlign="center">
          <Typography fontWeight="bold" fontSize="32px" color="black">
            AstroWorld
          </Typography>
        </Box>

        <Box
          style={{
            width: "35rem",
            lineHeight: 10,
            padding: 10,
            animation: "slide-up 0.5s ease",
            position: "absolute",
            left: "100px",

            top: "80px",
          }}
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem">
          <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
            Welcome to AstroWorld, a new dimension of Social Media!
          </Typography>
          <Form />
        </Box>
      </Box>
      <div
        style={{
          width: "35rem",
          lineHeight: 10,
          padding: 10,
          animation: "slide-up 0.5s ease",
          position: "absolute",
          right: "10px",
          width: "300px",
          top: "80px",
        }}>
        {/* <img src={loginImg} alt="Login" width="400" /> */}
      </div>
    </>
  );
};

export default LoginPage;
