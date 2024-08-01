import React from "react";
import ads from ".././../../public/google ads.jpg";
import Image from "next/image";

const Advisement = () => {
  return (
    <div className="flex justify-center items-center text-2xl lg:h-[160px] h-[180px] w-full mb-2">
      <Image
        className="p-2 rounded-xl"
        src={ads}
        height={500}
        width={500}
        alt="ads"
      />
    </div>
  );
};

export default Advisement;
