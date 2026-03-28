import { BadgeCheck, PackageOpen, RefreshCcw, ShieldCheck, Van } from "lucide-react";
import React from "react";

const WhyPickUs = () => {
  return (
    <div>
      <h1 className="text-secondary-light text-center text-4xl font-bold">Why Shop With Us</h1>
      <div className="mt-5 grid grid-cols-4 gap-4">

        {/* card 1  */}
        <div className="border-secondary flex flex-col items-center justify-center gap-3 rounded-lg border p-5 text-center hover:border-secondary-light duration-700 ease-linear transition-colors hover:border-2 hover:shadow-md">
          <BadgeCheck size={40} color="#b89a6a"/>
          <h2 className="text-primary-light font-playfair text-2xl font-semibold">
            100% Authentic Products
          </h2>
          <p className="font-inter text-sm">
            Every item is sourced directly from verified brands and authorized suppliers. No
            replicas, no compromises — just genuine luxury.
          </p>
        </div>
        {/* card 2  */}
        <div className="border-secondary flex flex-col items-center justify-center gap-3 rounded-lg border p-5 text-center hover:border-secondary-light duration-700 ease-linear transition-colors hover:border-2 hover:shadow-md">
          <Van size={40} color="#b89a6a"/> 
          <h2 className="text-primary-light font-playfair text-2xl font-semibold">
            Free & Fast Delivery
          </h2>
          <p className="font-inter text-sm">
            Enjoy free shipping on orders over ৳999. Express delivery available — your order reaches you in 2–4 business days.
          </p>
        </div>
        {/* card 3  */}
        <div className="border-secondary flex flex-col items-center justify-center gap-3 rounded-lg border p-5 text-center hover:border-secondary-light duration-700 ease-linear transition-colors hover:border-2 hover:shadow-md">
          <RefreshCcw size={40} color="#b89a6a"/> 
          <h2 className="text-primary-light font-playfair text-2xl font-semibold">
            Easy 7-Day Returns
          </h2>
          <p className="font-inter text-sm">
            Not satisfied? Return it hassle-free within 7 days. No questions asked, full refund guaranteed.
          </p>
        </div>
        {/* card 4  */}
        <div className="border-secondary flex flex-col items-center justify-center gap-3 rounded-lg border p-5 text-center hover:border-secondary-light duration-700 ease-linear transition-colors hover:border-2 hover:shadow-md">
          <ShieldCheck size={40} color="#b89a6a"/> 
          <h2 className="text-primary-light font-playfair text-2xl font-semibold">
            Secure Payments
          </h2>
          <p className="font-inter text-sm">
            Shop with confidence using SSL-encrypted checkout. We accept bKash, Nagad, cards, and cash on delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyPickUs;
