import React from "react";

import { FloatingWhatsApp } from 'react-floating-whatsapp'

// Components Importations Section 
import Head from "../components/head";
import NavBar from "../components/navbar";
import HomeSection from '../components/sections/homeSection';
import FooterSection from "../components/sections/footerSection";

// Prismic Importations Section 
import Prismic from 'prismic-javascript'
import { PrismicClient } from '../prismic-configuration'
import { getLocales } from "../lib/getLocales";
import { createClient } from "../prismicio"

import ConstructionPage from './construction';


const Homepage = props => {
    
  const { homeContent, benefitsContent, shareContent, aboutContent, contactContent, vehiclesContent, actualLocale, locales, seo, generalInformation, menuContent, signUpContent } = props

  console.log(benefitsContent)

  return<div className="main overflow-x-hidden">
          <Head
            title={seo.data.title}
            description={seo.data.default_description}
            keywords={seo.data.default_keywords}
            url={seo.data.default_url}
            ogImage={seo.data.default_image}
          />
          <NavBar
              content={menuContent.data.menu_links} 
              logo={generalInformation.data.small_logo.url}
              imageWidth={generalInformation.data.small_logo_width}
              imageHeight={generalInformation.data.small_logo_height}
              locales={locales}
              actualLocale={actualLocale}
              texasLogo={generalInformation.data.texaco_logo.url}
            />
          <HomeSection
            backgroundUrl={homeContent.data.background_image.url}
            topText={homeContent.data.top_text}
            bottomText={homeContent.data.bottom_text}
            subTopText={homeContent.data.sub_top_text}
            subBottomText={homeContent.data.sub_bottom_text}
            sloganText={homeContent.data.slogan_text}
          />
<div className="flex text-center font-bold xl:text-6xl text-2xl xl:mb-20 mb-16">CONOCE LOS BENEFICIOS DE TANQUEAR TU MOTOR CON TEXACO CON TECHRON</div>
<div className="flex xl:flex-row flex-col justify-between xl:ml-20 xl:mr-20">
  {benefitsContent.map((beneficio, index) => (
    <div key={index} className="beneficio-card mb-10">
      <h2 className="text-center font-bold xl:text-6xl text-4xl mb-2">{beneficio.data.benefit_title}</h2>
      <div className="flex justify-center mb-2"> {/* Aplicar justify-center aquí */}
        <div>
          <img src={beneficio.data.benefit_image.url} alt={beneficio.data.benefit_image.alt} />
        </div>
      </div>
      <p className="text-center	">{beneficio.data.benefit_description}</p>
    </div>
  ))}
</div>


          <FloatingWhatsApp
                  phoneNumber="+573147965989"
                  accountName="Camila - Texaco 25"
                  allowEsc
                  allowClickAway
                  notification
                  notificationSound
                  chatMessage={
                    <div>
                      Hola! 🤝
                      <br />
                      Cómo podemos ayudarte?
                    </div>
                  }
                  placeholder="Escribe tu mensaje"
                  statusMessage="En linea"
                  avatar={'/static/avatar25.png'}
          />


          <FooterSection
            logo={generalInformation.data.small_logo.url}
            imageWidth={generalInformation.data.small_logo_width}
            imageHeight={generalInformation.data.small_logo_height}
          />

          {/* <ConstructionPage/> */}
        </div>
}

const getStaticProps = async ({ params, locale, previewData }) => {
  const client = createClient({ previewData });
  const locales = await getLocales(client)
  return {
      props: {
        seo: await getPrismicData('seo', locale),
        generalInformation: await getPrismicData('general_information', locale),
        menuContent: await getPrismicData('menu', locale),
        homeContent: await getPrismicData('home_section',locale),
        // rentContent: await getPrismicData('rent_section',locale),
        // shareContent: await getPrismicData('share_section',locale),
        // aboutContent: await getPrismicData('about_section',locale),
        // contactContent: await getPrismicData('contact_section',locale),
        benefitsContent: await getPrismicCustomTypeData('benefit',locale),
        locales: locales,
        actualLocale: locale
      }
  }
}

// Wrapper for prismic functions
const getPrismicData = async (name, lang) => {
  const prismicAnswer = await PrismicClient().query(  
    Prismic.Predicates.at('document.type', name),{ lang })

  // Get first doc of this type (there should be 1 doc per type)
  const doc = prismicAnswer.results[0]
  return doc
}

const getPrismicCustomTypeData = async (name, lang) => {
  const prismicAnswer = await PrismicClient().query(  
    Prismic.Predicates.at('document.type', name), { lang })

  // Get all docs of this type (there should many docs per type)
  const CustomTypeDoc = prismicAnswer.results
  return CustomTypeDoc
}

export default Homepage
export { getStaticProps }