import React from "react";
import {
  UilArrowDown,
  UilArrowUp,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function Temp() {
  return (
    <div>
      <div className="flex flex-row justify-center text-white items-center py-6">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w22"
        />
        <p className="text-6xl"> 55• </p>
      </div>
      <div className="flex flex-col space-y-3">
        <div className="flex text-sm items-center  text-white justify-center font-light">
          <UilTemperature size={20} className="mx-3" />
          Real Feel: <span className="font-medium ml-2">58•</span>
        </div>
        <div className="flex text-sm items-center  text-white justify-center font-light">
          <UilWind size={20} className="mx-3" />
          Wind Speed: <span className="font-medium ml-2">14mph</span>
        </div>
        <div className="flex text-sm items-center   text-white justify-center font-light">
          <UilTear size={20} className="mx-3" />
          Humidity: <span className="font-medium ml-2">60%</span>
        </div>
        <div className="flex text-sm items-center   text-white justify-center font-light">
          <UilSun size={20} className="mx-3" />
          <p className="font-light">
            Rise: <span className="font-medium ml-1">6am</span>
          </p>
        </div>
        <div className="flex text-sm items-center   text-white justify-center font-light">
          <UilSunset size={20} className="mx-3" />
          <p className="font-light">
            Set: <span className="font-medium ml-1">8pm</span>
          </p>
        </div>
        <div className="flex text-sm items-center   text-white justify-center font-light">
          <UilSun size={20} className="mx-3" />
          <UilArrowUp size={20} />
          <p className="font-light">
            High: <span className="font-medium ml-1">72•</span>
          </p>
        </div>
        <div className="flex text-sm items-center   text-white justify-center font-light">
          <UilSun size={20} className="mx-3" />
          <UilArrowDown size={20} />
          <p className="font-light">
            Low: <span className="font-medium ml-1">52•</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Temp;
