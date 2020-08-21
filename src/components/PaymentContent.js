import React from "react";
import BookingCard from "./subcomponents/BookingCard";
function PaymentContent({ posts }) {
  return (
    <>
      <div className="px-56 mt-12">
        <BookingCard posts={posts} />
      </div>
    </>
  );
}

export default PaymentContent;
