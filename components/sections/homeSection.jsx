import React from "react";


const HomeSection = props => {

  const { backgroundUrl, topText, bottomText, sloganText} = props

  return (
    <div id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundUrl}`}}>
      <div className="flex flex-col w-full text-white justify-center h-screen">
          <div className="font-trebuchet-bold-italic text-2xl text-center xl:hidden mb-28 font-bold hover:scale-110 transition duration-500">
              {sloganText}
          </div>
          <div className="text-4xl text-center font-bold hover:scale-110 transition duration-500 font-lato-black">
              {topText}
          </div>
          <div className="pr-5 pl-5 h-12 text-6xl bg-[#e56608ff] text-center self-center -skew-y-12 rotate-12 font-extrabold hover:scale-110 transition duration-500">
            <div className="-translate-y-1 font-lato-black">
              {bottomText}
            </div>
          </div>
      </div>
    </div>
  );
}

export default HomeSection;