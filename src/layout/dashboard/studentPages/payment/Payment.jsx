import React from "react";
import { useParams } from "react-router-dom";
import useAddedClass from "../../../../hooks/useAddedClass";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPEPK);

const Payment = () => {
  console.log(stripePromise);
  const id = useParams().id;
  const [SelectedClass] = useAddedClass();
  console.log(SelectedClass);
  const paymentClass = SelectedClass?.find(
    (singleClass) => singleClass._id == id
  );
  const payAmount = parseFloat(paymentClass?.price.toFixed(2));

  return (
    <div>
      <h1 className="text-3xl mt-12 mb-4 text-center">
        Make Payment For The Enrollment
      </h1>
      <h1 className="text-3xl mt-12 mb-8 text-center">To Pay: ${payAmount}</h1>
      <div>
        <Elements  stripe={stripePromise}>
          <CheckoutForm  payAmount={payAmount}  />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
