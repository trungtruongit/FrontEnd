import { useEffect, useState } from "react";
import { Box, styled, useTheme } from "@mui/material";
import { H1 } from "components/Typography";
import Carousel from "components/carousel/Carousel";
import ProductCard10 from "components/product-cards/ProductCard10";
import useWindowSize from "hooks/useWindowSize";
// styled components
const TitleBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  "& h1": {
    fontSize: 40,
    fontWeight: 600,
    marginBottom: "10px",
  },
  "& div": {
    width: 200,
    height: "2px",
    margin: "auto",
    background: theme.palette.primary.main,
  },
})); // ===============================================================

// ===============================================================
const Section3 = ({ products }) => {
  const theme = useTheme();
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(3);
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(3);
  }, [width]);
  return (
    <Box>
      <TitleBox my={4}>
        <H1>Top Saled Products</H1>
        <Box />
      </TitleBox>

      <Carousel
        infinite={true}
        visibleSlides={visibleSlides}
        totalSlides={products.length}
        sx={{
          "& #backArrowButton, #backForwardButton": {
            width: 40,
            height: 40,
            borderRadius: 0,
            background: "#fff",
            boxShadow: theme.shadows[2],
            color: theme.palette.primary.main,
          },
        }}
      >
        {products.map((item) => (
          <Box py={0.5} key={item.id}>
            <ProductCard10
              hideRating
              id={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              imgUrl={item.thumbnail}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Section3;
