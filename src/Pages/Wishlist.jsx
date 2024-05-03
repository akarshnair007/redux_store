import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import {
  faArrowLeft,
  faCartPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistItem } from "../redux/slices/wishlistSlice";
import { addCartItem } from "../redux/slices/cartSlice";

const Wishlist = () => {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  console.log(wishlistArray);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addCartItem(product));
    dispatch(removeWishlistItem(product.id));
  };

  return (
    <>
      <Row className="ms-5 me-3 mt-5">
        {wishlistArray.length > 0 ? (
          wishlistArray.map((product) => (
            <Col className="mb-5" sm={12} md={6} lg={4} xl={3}>
              <Card className="rounded w-100 shadow-lg">
                <Card.Img
                  variant="top"
                  src={product?.image}
                  style={{
                    height: "180px",
                    width: "80%",
                    objectFit: "contain",
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">
                    {product?.title.slice(0, 20) + "..."}
                  </Card.Title>{" "}
                  <Card.Text>
                    <p>{product?.description.slice(0, 52) + "..."}</p>
                    <p className="fw-bolder">Price: ${product?.price}</p>
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button
                      onClick={() => dispatch(removeWishlistItem(product.id))}
                      variant="outline-secondary"
                      className="rounded"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        style={{ color: "red" }}
                      />
                    </Button>
                    <Button
                      onClick={() => handleAdd(product)}
                      variant="outline-primary"
                      className="rounded"
                    >
                      <FontAwesomeIcon
                        icon={faCartPlus}
                        style={{ color: "green" }}
                      />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center w-100 my-5">
            <h2 className="text-danger mt-4 fw-semibold">
              Your Wishlist is Empty
            </h2>

            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWgxYzVsNjEwMnFnOHEzMjlrejRsdWQ5cTBob3Z6Z2c3NmN6enZmdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/giXLnhxp60zEEIkq8K/giphy.gif"
              alt="empty cart"
              className="rounded"
              height={330}
              width={350}
            />
            <Link to={"/"}>
              {" "}
              <button className="btn btn-success p-3 rounded mt-3">
                <FontAwesomeIcon icon={faArrowLeft} className="me-3" />
                Go back to Home
              </button>
            </Link>
          </div>
        )}
      </Row>
    </>
  );
};

export default Wishlist;
