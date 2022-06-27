import { Carousel, Nav } from "react-bootstrap";
import storeImg from "../../assests/images/services1.svg";
import groceryImg from "../../assests/images/services2.svg";
import cafeImg from "../../assests/images/services3.svg";
import foodImg from "../../assests/images/services4.svg";
import { store, grocery, food, cafe } from "../../redux/slice/appSlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";

function ServicesBtn() {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    if (selectedIndex === 0) {
      dispatch(store());
    }
    if (selectedIndex === 1) {
      dispatch(grocery());
    }
    if (selectedIndex === 2) {
      dispatch(cafe());
    }
    if (selectedIndex === 3) {
      dispatch(food());
    }
  };

  return (
    <>
      <Nav
        fill
        variant="tabs"
        defaultActiveKey="store"
        style={{ display: "none" }}
      >
        <Nav.Item onClick={() => dispatch(store())}>
          <Nav.Link eventKey="store">
            <div className="servicesBtn">
              <img src={storeImg} alt="services-icon" />
              <p>Store</p>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => dispatch(grocery())}>
          <Nav.Link eventKey="grocery">
            <div className="servicesBtn">
              <img src={groceryImg} alt="services-icon" />
              <p>Grocery</p>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => dispatch(cafe())}>
          <Nav.Link eventKey="cafe">
            <div className="servicesBtn">
              <img src={cafeImg} alt="services-icon" />
              <p>Cafe</p>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => dispatch(food())}>
          <Nav.Link eventKey="food">
            <div className="servicesBtn">
              <img src={foodImg} alt="services-icon" />
              <p>Food</p>
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="resSlider"
      >
        <Carousel.Item>
          <div className="sliderItem">
            <div className="itemInner">
              <img className="d-block w-100" src={storeImg} alt="First slide" />
              <p>Store</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="sliderItem">
            <div className="itemInner">
              <img
                className="d-block w-100"
                src={groceryImg}
                alt="First slide"
              />
              <p>Grocery</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="sliderItem">
            <div className="itemInner">
              <img className="d-block w-100" src={cafeImg} alt="First slide" />
              <p>Cafe</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="sliderItem">
            <div className="itemInner">
              <img className="d-block w-100" src={foodImg} alt="First slide" />
              <p>Food</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ServicesBtn;
