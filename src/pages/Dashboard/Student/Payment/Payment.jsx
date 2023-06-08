import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Checkout from "./Checkout";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { price, classItem } = location.state;
  console.log(price, classItem);

  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_STRIPE);
  return (
    <div>
      <h1 className="text-center text-4xl font-heading font-bold mb-10">
        Payment
      </h1>
      <div>
        <Elements stripe={stripePromise}>
          <Checkout price={price} classItem={classItem} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
