import { useEffect, useState } from "react";
import { Box, styled, useTheme } from "@mui/material";
import useWindowSize from "hooks/useWindowSize";
import { Paragraph } from "components/Typography";
import Carousel from "components/carousel/Carousel";
import ProductCard13 from "components/product-cards/ProductCard13";
import CategorySectionCreator from "components/CategorySectionCreator";
const SubTitle = styled(Paragraph)(({ theme }) => ({
  fontSize: 12,
  marginTop: "-20px",
  marginBottom: "20px",
  color: theme.palette.grey[600],
})); // =================================================================

// =================================================================
const ProductCarousel = ({ products, title }) => {
  const width = useWindowSize();
  const { palette, shadows } = useTheme();
  const [visibleSlides, setVisibleSlides] = useState(3);
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(3);
  }, [width]);
  return (
    <CategorySectionCreator title={title} seeMoreLink="#" mb={0}>
      <SubTitle>Best collection in 2021 for you!</SubTitle>

      <Carousel
        infinite={true}
        totalSlides={products.length}
        visibleSlides={visibleSlides}
        sx={{
          "& #backArrowButton, #backForwardButton": {
            width: 40,
            height: 40,
            background: "#fff",
            boxShadow: shadows[2],
            color: palette.primary.main,
          },
        }}
      >
        {products.map((item) => (
          <Box pb={2} key={item.id}>
            <ProductCard13
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
    </CategorySectionCreator>
  );
};

export default ProductCarousel;
