import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import "./common.css";
import Swal from "sweetalert2";
import useAxiosWithToken from "../../../../hooks/useAxiosWithToken";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";

const CheckoutForm = ({ payAmount,paymentClass }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosWithToken();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const price = {
    payAmount,
  };

  useEffect(() => {
    if (price != null && price !== undefined && price !== 0) {
      axiosSecure.post("/create-payment-intent", price).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
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
    setProcessing(true);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "unknown",
          },
        },
      });

    setProcessing(false);

    if (confirmError) {
      console.log(confirmError);
    }

    if (paymentIntent.status == "succeeded") {
      const paymentInfo = {
        email: user?.email,
        txId: paymentIntent.id,
        date: new Date(),
        payAmount,
        classId:paymentClass?._id,
        className:paymentClass?.className,
        instructor:paymentClass?.instructor          
      };
      console.log(paymentInfo);
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
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
