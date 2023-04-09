import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constans";
import { Appcontext, Context } from "../context/contextErr";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);

		const handleChange = (name, type) => {
			switch (type) {
        case "categories":
          return setSelectCategories(name);
          break;
        case "home":
          return setSelectCategories(name);
          break;
        case "menu":
          return false;
          break;
        default:
          break;
      }
		}

  const navigate = useNavigate();
  return (
    <div
      className='md:block w-[240px] overflow-y-auto h-full py-4 bg-green-300 absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : ""}'
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {handleChange(item.name, item.type)
								navigate("")}}
                className={`${
                  selectCategories === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;
