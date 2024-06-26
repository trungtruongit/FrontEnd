import { Box, Button, Grid, styled, useTheme } from "@mui/material";
import LazyImage from "components/LazyImage";
import Carousel from "components/carousel/Carousel";
import { H1, Paragraph } from "components/Typography";
// styled components
const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: 60,
  overflow: "hidden",
  backgroundColor: theme.palette.primary[100],
  "& .carousel-dot": {
    left: 0,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute",
  },
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: 1280,
  margin: "auto",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));
const GridItemOne = styled(Grid)(({ theme }) => ({
  padding: 20,
  "& .titleBox": {
    marginTop: 10,
    marginBottom: 30,
    "& h1": {
      fontSize: 45,
      lineHeight: 1.3,
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .titleBox": {
      "& h1": {
        fontSize: 30,
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    "& .titleBox": {
      textAlign: "center",
      "& h1": {
        fontSize: 25,
      },
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  borderRadius: 0,
  fontSize: "16px",
  background: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary[400],
  },
}));
const GridItemTwo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
})); // ==========================================================

// ==========================================================
const Section1 = ({ carouselData }) => {
  const { palette } = useTheme();
  return (
    <StyledBox id="carouselBox">
      <Carousel
        spacing="0px"
        showDots={true}
        autoPlay={false}
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        dotColor={palette.primary.main}
        totalSlides={carouselData.length}
      >
        {carouselData.map(({ id, title, subTitle, buttonText, imgUrl }) => (
          <StyledGrid container key={id}>
            <GridItemOne item md={6} sm={6} xs={12}>
              <Box py={6}>
                <Paragraph color="primary.main">{subTitle}</Paragraph>
                <Box className="titleBox">
                  <H1 maxWidth={400}>{title}</H1>
                </Box>

                <StyledButton
                  variant="contained"
                  sx={{
                    px: "30px",
                    py: "8px",
                  }}
                >
                  {buttonText}
                </StyledButton>
              </Box>
            </GridItemOne>

            <GridItemTwo item md={6} sm={6} xs={12}>
              <LazyImage
                priority
                alt={title}
                width={600}
                height={450}
                src={imgUrl}
                layout="responsive"
                objectFit="contain"
              />
            </GridItemTwo>
          </StyledGrid>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default Section1;
