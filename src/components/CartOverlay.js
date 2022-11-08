import React, { Component } from "react";
import cartOutline from "./icons/cart-outline.svg";
import CartItem from "./cartItem";

class CartOverlay extends Component {

  render() {
    // sum up total of cart items quantity
    let total = 0;
    this.props.cartItems.forEach((item) => {
      total += item.quantity;
    });

    // sum up total of cart items price
    let totalPrice = 0;
    this.props.cartItems.forEach((item) => {
      totalPrice += item.itemInfo.prices[0].amount * item.quantity;
    });

    
    
    return (
      <div>
        <img src={cartOutline} />
        {this.props.cartOverlayState === false ? null : (
          <div className="cartOverLay">
           {this.props.cartItems.length === 0 ?
            <h2>cart is empty</h2> :
            <div>
              <div>
                <h3>My Bag: {total} items </h3>
              </div>
              {this.props.cartItems.map((item, i) => (
                <div className="cartItem" key={i}>
                  <div className="cartItemInfo">
                    <CartItem item={item} />
                  </div>
                </div>
              ))}
            </div>}
            <div>
              <button>View Bag</button>
              <button>Checkout</button>

            </div>
            <div>
              <h4>Totall: {parseFloat(totalPrice.toFixed(2)) } $</h4>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CartOverlay;
