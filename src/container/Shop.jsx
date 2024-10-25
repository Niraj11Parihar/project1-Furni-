import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../components/appSlice";

function Shop() {
  const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch()

  return (
    <>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            {

                product.length > 0 ? 
                product.map((item, index) => {
                  return (
                    <div className="col-12 col-md-4 col-lg-3 mb-5" key={index}>
                      <a  className="product-item" onClick={()=>dispatch(addProduct(item))}>
                        <img
                          src={item.imageSrc}
                          className="img-fluid product-thumbnail"
                          alt={item.title}
                        />
                        <h3 className="product-title">{item.title}</h3>
                        <strong className="product-price">
                          ${item.price}
                        </strong>
                        <span className="icon-cross">
                          <img src="images/cross.svg" className="img-fluid" alt="cross icon" />
                        </span>
                      </a>
                    </div>
                  );
                }):
                <h1>No product available</h1>


            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
