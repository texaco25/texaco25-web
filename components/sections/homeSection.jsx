import React from "react";


const HomeSection = props => {

  const { backgroundUrl, topText, bottomText, subTopText, subBottomText, sloganText} = props

  return (
      <div id="home" className=" xl:w-11/12 xl:translate-x-20 bg-cover bg-center shadow-2xl rounded-3xl xl:mt-30 mt-20 h-full" style={{ backgroundImage: `url(${backgroundUrl}`}}>
        <div className=" bg-gradient-to-r from-black rounded-3xl">
          <div className="flex flex-col xl:h-1/2 w-full text-white xl:justify-center pt-10 pb-20 h-full">
            <div className="pl-4 pr-4 text-xl font-bold">
                {sloganText}
            </div>
            <div className="pl-4 pt-5 xl:w-1/2 xl:text-6xl text-4xl font-bold">
                {topText}
            </div>
            <div className="pl-4 pr-4 pb-10 xl:text-xl ">
                {bottomText}
            </div>
            <div className="pl-4 pr-4 xl:w-1/2 xl:text-6xl text-4xl font-bold">
                {subTopText}
            </div>
            <div className="pl-4 pr-4 xl:text-xl">
                {subBottomText}
            </div>
          </div>
        </div>
      </div>
        );
}

export default HomeSection;