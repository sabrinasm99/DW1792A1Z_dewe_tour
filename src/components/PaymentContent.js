import React from "react";
import BookingCard from "./subcomponents/BookingCard";
function PaymentContent({ posts }) {
  return (
    <>
      {posts.data.data.length === 0 ? (
        <div className="h-full flex justify-center mt-56">
          <h1 className="text-3xl">No Transaction</h1>
        </div>
      ) : (
        <div className="px-48 mt-12 flex flex-col-reverse">
          <BookingCard posts={posts} />
        </div>
      )}
    </>
  );
}

export default PaymentContent;
