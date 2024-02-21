import React from "react";
import './Error.css';
function Error() {
  return (
    <div className=" overflow-hidden">
      <style>
        {`.emoji-404 {
                    position: relative;
                    animation: mymove 2.5s infinite;
                }

                @keyframes mymove {
                    33% {top: 0;}
                    66% {top: 20px;}
                    100% {top: 0;}
                }`}
      </style>
      <div className="justify-center">
        <center className="mt-24 m-auto">
        <div className="four_zero_four_bg"></div>
          <div className="tracking-widest mt-4">
            <span className="text-gray-500 text-6xl block">
              <span>4 0 4</span>
            </span>
            <span className="text-gray-500 text-xl">
              Sorry, We couldn't find what you are looking for!
            </span>
          </div>
        </center>
        {/* <center className="mt-6">
            <a
                href="#"
                className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
            >
                Home
            </a>
            </center> */}
      </div>
    </div>
  );
}

export default Error;