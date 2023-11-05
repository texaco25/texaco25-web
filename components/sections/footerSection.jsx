import React from "react";
import Image from "next/image"
import { useRouter } from 'next/router';
import { PrismicNextLink } from '@prismicio/next'


const FooterSection = props => {

  const { backgroundUrl, topText, bottomText, sloganText, logo, imageHeight, imageWidth} = props
  const wazeTexaco31 = "https://www.waze.com/live-map/directions/texaco-31-%E2%9B%BD-san-pedro-betania-rn25-05-greater(s)-san-pedro?navigate=yes&to=place.w.185991208.1859649935.2839390"
  const wazeTexaco25 = "https://www.waze.com/live-map/directions/co/valle-del-cauca/cali/estacion-de-servicio-texaco-la-25?navigate=yes&to=place.ChIJ0YbF40OmMI4RohWcnqU7uA8"
  return (
      <div id="footer" className="bg-cover bg-center bg-black shadow-2xl xl:mt-30 mt-20 h-full">
        <div className=" bg-gradient-to-r from-black">
          <div className="flex flex-col w-full text-white xl:justify-center pt-10h-full text-center">
              <div className="mt-10 ml-2 mr-2 mb-5 xl:text-4xl text-xl font-bold font-lato-black text-center">
                  En la ciudad y en carretera. Brindando los mejores combustibles y excelentes servicios.
              </div>
              <div className="self-center">
                <PrismicNextLink href="/#home" className="">
                <Image className="xl:scale-50 scale-50" src={logo} width={imageWidth} height={imageHeight} alt="Texaco25-Logo"/>
                </PrismicNextLink>
          </div>
              <div className="font-bold font-lato-black">
                  Diagnosticentro Texaco la 25
              </div>
              <div className="font-lato-black">
                  Calle 25 # 4 - 08 San Nicolas - Cali Valle del Cauca
              </div>
              <div className="mb-10 font-lato-black">
                  Telefono: +57 602 8806054
              </div>
              <div className="font-bold font-lato-black">
                  Estacion de Servicio Texaco 31
              </div>
              <div className="font-lato-black">
                  Doble Calzada Tulua-Buga - San Pedro Valle del Cauca
              </div>
              <div className="mb-5 font-lato-black">
                  Telefono: +57 602 3302243
              </div>
              <div className="">
                <div className="font-lato-black bg-red-500">
                © Copyright 2023 | texacola25.com | Todos los derechos reservados. Sitio Web Desarrollado por GLUONICO.
                </div>
              </div>
          </div>
        </div>
      </div>
        );
}

export default FooterSection;