import Image from "next/image";
import React from "react";

const Categorycard = () => {
  return (
    <div>
      <div>
        <Image
          src="/assets/images/category1.png"
          alt="category1"
          width={300}
          height={300}
          className="rounded-lg"
        ></Image>

        <h1>Category 1</h1>
        <p></p>
      </div>
    </div>
  );
};

export default Categorycard;
