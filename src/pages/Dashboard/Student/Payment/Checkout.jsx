import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const Checkout = ({ price, classItem }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:5100/create-payment-intents", { price })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "unknown",
          },
        },
      });
    if (paymentError) {
      console.log(paymentError);
    }

    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      //   payment history
      const paymentInfo = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
      };
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="block mx-auto px-6 rounded-full py-1 bg-custom1 text-white"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <small className="text-red-500 text-center">{cardError}</small>
      {transactionId && (
        <small className="text-green-500 text-center">
          Your payment is successful, TransactionId: {transactionId}
        </small>
      )}
    </div>
  );
};

export default Checkout;
