// import logo from "./logo.svg";
import "./App.css";
import Slider from "react-slick";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Image from "material-ui-image";
import clg1 from "./images/clg1.jpg";
import clg2 from "./images/clg2.jpg";
import clg3 from "./images/clg3.jpg";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <Button
//       className={className}
//       // class="slick-prev pull-left"
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <Button
//       size="large"
//       className={className}
//       // class="slick-prev pull-right"
//       style={{ ...style, display: "block", background: "red", mt: 100 }}
//       onClick={onClick}
//     />
//   );
// }
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
function App() {
  const images = [clg1, clg2, clg3];
  // const ArrowLeft = (props) => {
  //   <Button
  //     style={{ background: "red", border: 0 }}
  //     {...props}
  //     className={"prev"}
  //   >
  //     back
  //   </Button>;
  // };
  const settings = {
    // // dots: true,
    // // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // // centerMode: true,
    // // variableWidth: true,
    // // swipeToSlide: true,
    // // edgeFriction: 0.15,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // // // arrows: true,
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    // centerMode: true,
    adaptiveHeight: true,
    fade: true,
    // arrows: true,
    // prevArrow: true,
    // prevArrow: (
    //   <Button type="button" class="slick-prev pull-left">
    //     <i class="fa fa-angle-left" aria-hidden="true"></i>
    //   </Button>
    // ),
    // nextArrow: (
    //   <Button type="button" class="slick-next pull-right">
    //     <i class="fa fa-angle-right" aria-hidden="true"></i>
    //   </Button>
    // ),
    autoplaySpeed: 2500,
    className: "slides",
  };
  const navItems = ["Home", "About", "Contact"];

  return (
    <div className="App">
      <AppBar component="nav">
        <Toolbar>
          <Typography fontSize={30}>
            <b>SMS PU COLLAGE</b>
          </Typography>

          <Box sx={{ ml: 69, display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        hello
      </header> */}
      {/* <Card
        sx={{
          maxWidth: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 0,
          flexDirection: "column",
        }}
      > */}
      <Slider {...settings}>
        {images.map((image, i) => (
          <Box
            sx={{
              width: 300,
              height: 500,
              // backgroundColor: 'primary.dark',
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            component="img"
            src={image}
          ></Box>
        ))}
        {/* <Image src={clg1} alt="image" /> */}
        {/* <Box component="img" src={clg1} /> */}
      </Slider>
      {/* </Card> */}
    </div>
  );
}

export default App;
