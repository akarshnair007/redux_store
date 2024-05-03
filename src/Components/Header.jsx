import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  console.log(wishlistArray);
  const cartArray = useSelector((state) => state.cartReducer);
  console.log(cartArray);

  return (
    <Navbar expand="lg" className="bg-dark text-light">
      <Container>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Navbar.Brand href="#home" className="text-light">
            <FontAwesomeIcon
              icon={faOpencart}
              style={{ color: "#d26541" }}
              beat
              className="me-3"
            />
            Best-Cart
          </Navbar.Brand>{" "}
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to={"/wishlist"}>
                <button className="btn btn-outline-light border rounded">
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "#e70d0d" }}
                    className="me-3"
                  />
                  Wishlist
                  <Badge bg="secondary" className="ms-2 border rounded">
                    {wishlistArray.length}
                  </Badge>
                </button>
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to={"/cart"}>
                <button className="btn btn-outline-light border rounded">
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    style={{ color: "#d2a119" }}
                    className="me-3"
                  />
                  Cart
                  <Badge bg="secondary" className="ms-2 border rounded">
                    {cartArray.length}
                  </Badge>
                </button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
