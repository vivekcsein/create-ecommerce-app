"use client";
import { RootState } from "@/libs/redux/store";
import { useSelector } from "react-redux";
import Cart_empty from "./Cart_empty";
import Cart_heading from "./Cart_heading";
import Cart_itemListing from "./Cart_itemListing";
import Cart_promoCode from "./Cart_promoCode";
import Cart_orderSummary from "./Cart_orderSummary";
import Animated_card from "@/components/wrappers/Animated_card";
import {
  selectDiscount,
  selectShipping,
  selectSubtotal,
  selectTax,
  selectTotal,
} from "@/libs/redux/features/cartSlice";

const Cart_main = () => {
  const CartItems = useSelector(
    (state: RootState) => state.cart.localCartItems
  );

  const subtotal = useSelector(selectSubtotal);
  const discount = useSelector(selectDiscount);
  const tax = useSelector(selectTax);
  const shipping = useSelector(selectShipping);
  const total = useSelector(selectTotal);

  return (
    <div className="min-h-screen">
      {/* shoping cart is empty */}
      {CartItems.length == 0 ? (
        <Cart_empty />
      ) : (
        <>
          <Cart_heading />
          <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Animated_card width={5} variant="rainbow">
                  <Cart_itemListing />
                </Animated_card>
                <Animated_card width={5} variant="gradientVibes">
                  <Cart_promoCode />
                </Animated_card>
              </div>
              <div className="lg:col-span-1">
                <Animated_card width={5} variant="rainbow">
                  <Cart_orderSummary
                    discount={discount}
                    shipping={shipping}
                    subtotal={subtotal}
                    tax={tax}
                    total={total}
                  />
                </Animated_card>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart_main;
