import { faTrashCan, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart, removeCartItem } from "../redux/slices/cartSlice";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cartReducer);
  console.log(cartArray);

  const navigate = useNavigate();

  const getTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map((item) => item.price).reduce((p1, p2) => p1 + p2));
    } else {
      setTotal(0);
    }
  };

  const handleCheckout = () => {
    alert("Order Placed Successfully");
    dispatch(emptyCart());
    navigate("/");
  };

  useEffect(() => {
    getTotal();
  }, [cartArray]);

  return (
    <>
      {cartArray.length > 0 ? (
        <div className="row my-5">
          <div className="col-md-1"></div>
          <div className="col-md-7 mt-5 mb-5" style={{ overflowX: "auto" }}>
            <table className="table shadow w-100">
              <thead>
                <tr>
                  {" "}
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray?.map((product, index) => (
                  <tr>
                    {" "}
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>
                      <img
                        src={product?.image}
                        alt=""
                        width={"150px"}
                        height={"150px"}
                      />
                    </td>
                    <td>$ {product.price}</td>
                    <td>
                      <button
                        onClick={() => dispatch(removeCartItem(product.id))}
                        className="btn btn-danger outline-danger"
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-3 mt-5">
            <div className="shadow p-4">
              <h2 className="text-warning fw-semibold">Cart Summary</h2>
              <h4>
                Total Number of Products :{" "}
                <span className="text-success">{cartArray.length}</span>{" "}
              </h4>
              <h4>
                Total Price :{" "}
                <span className="text-success">
                  $ {Math.floor(total * 100) / 100}
                </span>{" "}
              </h4>
              <button
                onClick={handleCheckout}
                className="btn btn-warning rounded mt-4 w-100"
              >
                Check Out
              </button>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center w-100 my-5">
          <h2 className="text-danger mt-4 fw-semibold">Your Cart is Empty</h2>

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
    </>
  );
};

export default Cart;
