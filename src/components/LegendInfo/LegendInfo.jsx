import React from "react";
import LegendCard from "./LegendCard";

function LegendInfo({ item }) {
  return (
    <div className="bg-white rounded-xl py-6 px-4 flex divide-x-2 divide-[#EEEFF2]">
      {item.map((d, index) => {
        if (index === item.length - 1) {
          return (
            <LegendCard
              key={d.id}
              image={d.image}
              title={d.title}
              subtitle={d.subtitle}
            />
          );
        }
        return (
          <LegendCard
            key={d.id}
            image={d.image}
            title={d.title}
            subtitle={d.subtitle}
          />
        );
      })}
    </div>
  );
}

export default LegendInfo;
