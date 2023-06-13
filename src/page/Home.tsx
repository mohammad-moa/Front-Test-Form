import TopBanner from "../components/TopBanner";
import Form from "../components/Form";
import { Box, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <>
      <TopBanner />

      <Box sx={{ direction: "ltr" }} textAlign={"left"} px={2}>
        <Typography variant="h5" fontWeight={300}>
          همین اول کار امتیاز بگیر!
        </Typography>
        <Typography sx={{ mt: 1 }} fontWeight={300}>
          می‌تونی بی‌خیال این صفحه بشی، ولی اگه الان کاملش کنی بیشتر امتیاز
          می‌گیری.
        </Typography>
      </Box>

      <Form />
    </>
  );
};

export default Home;
