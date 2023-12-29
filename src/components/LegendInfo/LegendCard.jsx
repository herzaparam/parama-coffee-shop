import React from "react";

function LegendCard({ image, title, subtitle, className }) {
  return (
    <div className="flex-auto flex items-center justify-center h-48">
      <div className="rounded-full bg-secondary w-14 h-14 relative mr-6">
        <img
          src={image}
          alt={`image-title`}
          className="absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="">
        <h4 className="font-bold text-2xl text-black-dark">{title}</h4>
        <p className="text-lg text-black-light">{subtitle}</p>
      </div>
    </div>
  );
}

export default LegendCard;
