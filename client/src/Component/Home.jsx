import { Box, styled, Typography } from "@mui/material";

import InstaTele from "../Assets/Images/InstaTele.jpg";
import Youtube from "../Assets/Images/youtube.png";

const Header = styled(Box)`
  margin: 50px;
  & > div {
    margin-top: 50px;
  }
`;

const Image = styled("img")({
  width: "50%",
  height: "50%",
});

const Home = () => {
  return (
    <Header>
      <Typography variant="h2" style={{ textAlign: "center" }}>
        Home
      </Typography>
      <Box style={{ display: "flex" }}>
        <Image src={Youtube} alt="" />
        <Image src={InstaTele} alt="" />
      </Box>
    </Header>
  );
};

export default Home;
