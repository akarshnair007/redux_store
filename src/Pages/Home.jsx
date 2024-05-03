import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { addWishlistItem } from "../redux/slices/wishlistSlice";
import { addCartItem } from "../redux/slices/cartSlice";

const Home = () => {
  const dispatch = useDispatch();

  const data = useFetch("https://fakestoreapi.com/products");
  console.log(data);
  return (
    <Row className="ms-5 me-3" style={{ marginTop: "100px" }}>
      {data?.length > 0 ? (
        data?.map((product) => (
          <Col className="mb-5" sm={12} md={6} lg={4} xl={3}>
            <Card className="rounded w-100 shadow-lg">
              <Card.Img
                variant="top"
                src={product?.image}
                style={{ height: "200px", width: "80%", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title className="fw-bold">
                  {product?.title.slice(0, 20) + "..."}
                </Card.Title>
                <Card.Text>
                  <p>{product?.description.slice(0, 52) + "..."}</p>
                  <p className="fw-bolder">Price: ${product?.price}</p>
                </Card.Text>
                <div className="d-flex align-items-center justify-content-between">
                  <Button
                    variant="outline-danger"
                    onClick={() => dispatch(addWishlistItem(product))}
                    className="rounded"
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "#e90101" }}
                    />{" "}
                  </Button>
                  <Button
                    onClick={() => dispatch(addCartItem(product))}
                    variant="outline-warning"
                    className="rounded"
                  >
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      style={{ color: "#FFD43B" }}
                    />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <h2>No data avaiable</h2>
      )}
    </Row>
  );
};

export default Home;
