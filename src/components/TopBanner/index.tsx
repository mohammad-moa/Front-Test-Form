import Image from "../Common/Image";

import topBanner from "../../assets/images/top-banner.svg";
import logo from "../../assets/images/logo.svg";
import { Box } from "@mui/material";

const TopBanner: React.FC = () => {
  return (
    <Box position={"relative"}>
      <Image
        src={logo}
        alt={"logo-image"}
        width={"10%"}
        style={{ position: "absolute", top: "15px", left: "15px" }}
      />
      <Image src={topBanner} alt={"top-banner-image"} width={"100%"} />
    </Box>
  );
};

export default TopBanner;
