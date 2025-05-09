import { MdOutlineTouchApp } from "react-icons/md";
import { FaDatabase, FaWifi } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { CgAppleWatch } from "react-icons/cg";
import data from "../../data/about.json";
import { IconType } from "react-icons";
import Animate from "./animate";

// TypeScript icon map type
const iconMap: { [key: string]: IconType } = {
  MdOutlineTouchApp,
  FaDatabase,
  FaRocketchat,
  IoMdNotifications,
  FaWifi,
  CgAppleWatch,
};

export default function About() {
  return (
    <div className="grid sm:grid-cols-3 gap-4 gap-y-12">
      <Animate />
      {data.map((item) => {
        const IconComponent = iconMap[item.icon];
        return (
          <div data-aos="fade-up" className="text-gray-600 mt-8" key={item.id}>
            <div className="flex items-center">
              {IconComponent && <IconComponent className="w-12 h-12 mx-auto" />}
            </div>
            <h2 className="text-center font-semibold my-4 text-2xl">
              {item.title}
            </h2>
            <p className="text-center">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
