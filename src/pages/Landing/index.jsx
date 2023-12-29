import React from "react";
import Button from "../../components/Button/Button";
import LegendInfo from "../../components/LegendInfo/LegendInfo";
import icLocation from "../../assets/icon/ic_location.svg";
import icUser from "../../assets/icon/ic_user.svg";
import icLove from "../../assets/icon/ic_love.svg";

const item = [
  {
    id: 0,
    image: icUser,
    title: "90+",
    subtitle: "Staff",
  },
  {
    id: 1,
    image: icLocation,
    title: "30+",
    subtitle: "Customers",
  },
  {
    id: 2,
    image: icLove,
    title: "800+",
    subtitle: "Stores",
  },
];

function Landing() {
  return (
    <div>
      <div className="bg-coffee bg-no-repeat bg-cover w-full h-[90vh] grid grid-cols-2 gap-4 py-4 px-32">
        <div className="bg-red-500 flex flex-col justify-evenly">
          <h2 className="text-white font-bold text-5xl">
            Start Your Day with Coffee and Good Meals
          </h2>
          <h3 className="text-white font-bold text-xl">
            We provide high quality beans, good taste, and healthy meals made by
            love just for you. Start your day with us for a bigger smile!
          </h3>
          <Button style="secondary" label="Get Started!" className="!w-6/12" />
        </div>
        <div className="bg-red-500"></div>
        <div className="bg-red-500 col-span-2">
          <LegendInfo item={item} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
