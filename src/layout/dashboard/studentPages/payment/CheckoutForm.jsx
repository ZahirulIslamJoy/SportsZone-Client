import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import "./common.css";
import Swal from "sweetalert2";
import useAxiosWithToken from "../../../../hooks/useAxiosWithToken";


const CheckoutForm = ({payAmount}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure]=useAxiosWithToken();
  const price={
    payAmount
  }

  useEffect(() => {
    if (price != null || price !== null || price!==0 ) {
      axiosSecure.post("/create-payment-intent", price).then((res) => {
        console.log(res.data.clientSecret);
        // setClientSecret(res.data.clientSecret);
      });
    }
  },[]);

 


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title:`${error.message}`,
        showConfirmButton: false,
        timer: 2000
      })
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
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
        className="bg-[#1e2a4b] disabled:bg-slate-300"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
