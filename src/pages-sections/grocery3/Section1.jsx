import { Box, Button, Grid, styled, useTheme } from "@mui/material";
import { H1 } from "components/Typography";
import LazyImage from "components/LazyImage";
import Carousel from "components/carousel/Carousel";
// styled components
const StyledBox = styled(Box)(() => ({
  marginBottom: 60,
  overflow: "hidden",
  "& .carousel-dot": {
    left: 0,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute",
  },
}));
const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.paste[50],
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: 1280,
  alignItems: "center",
  margin: " 0 auto",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));
const GridItemTwo = styled(Grid)(({ theme }) => ({
  paddingLeft: 80,
  [theme.breakpoints.down("md")]: {
    paddingLeft: 40,
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    textAlign: "center",
  },
}));
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));
const GridItemOne = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
const TextBox = styled(Box)(({ theme }) => ({
  marginBottom: 40,
  "& h1": {
    fontSize: 50,
    fontWeight: 600,
    lineHeight: "1.35",
  },
  [theme.breakpoints.down("lg")]: {
    "& h1": {
      fontSize: 45,
    },
  },
  [theme.breakpoints.down("md")]: {
    "& h1": {
      fontSize: 38,
    },
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: 30,
  },
})); // ===================================================================

// ===================================================================
const Section1 = ({ mainCarouselData }) => {
  const { palette } = useTheme();
  return (
    <StyledBox id="carouselBox">
      <Carousel
        spacing="0px"
        showDots={true}
        autoPlay={false}
        showArrow={false}
        visibleSlides={1}
        dotClass="carousel-dot"
        dotColor={palette.primary.main}
        totalSlides={mainCarouselData.length}
      >
        {mainCarouselData.map((item, ind) => (
          <Container key={ind}>
            <StyledGrid container>
              <GridItemOne item md={6} sm={6} xs={12}>
                <Box pt={6}>
                  <LazyImage
                    priority
                    width={100}
                    height={100}
                    alt={item.title}
                    src={item.imgUrl}
                    layout="responsive"
                    objectFit="contain"
                  />
                </Box>
              </GridItemOne>

              <GridItemTwo item md={6} sm={6} xs={12}>
                <TextBox>
                  <H1 maxWidth={400}>{item.title}</H1>
                </TextBox>

                <StyledButton
                  variant="contained"
                  color="primary"
                  sx={{
                    px: "30px",
                    py: "6px",
                  }}
                >
                  {item.buttonText}
                </StyledButton>
              </GridItemTwo>
            </StyledGrid>
          </Container>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default Section1;
