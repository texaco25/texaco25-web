import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = 'TEXACO La 25 - Diagnosticentro - Venta de Combustible con TECHRON'
const defaultKeywords = 'Combustible, Gasolina, ACPM, Diesel, TECHRON, TEXACO, Motor, Carros, Motos, Automóviles, Camionetas, Motores, Servicio al cliente, Lubricantes, Cambio de Aceite, Cali, Valle del Cauca'
const defaultOGURL = 'https://texacola25.com/'
const defaultOGImage = 'https://ik.imagekit.io/3amlvbcx1/OGImage.png?updatedAt=1693374049249'


const Head = (props) => {
  return <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || 'Estaciones de Servicio TEXACO La 25 y La 31'}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="keywords" content={props.keywords || defaultKeywords} />

    {/* Favicon */}
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#000000" />

    {/* Open Graph / Social Media Meta Tags */}
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || 'Estaciones de Servicio TEXACO La 25 y La 31'} />
    <meta property="og:description" content="Tanquea en Estaciones TEXACO 25 y 31. Visita nuestro Diagnosticentro en Cali. COMPLETO SERVICIO para vehiculos" />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta name="twitter:title" content="Estaciones de Servicio TEXACO La 25 y La 31" />
    <meta name="twitter:description" content="Tanquea en Estaciones TEXACO 25 y 31. Visita nuestro Diagnosticentro en Cali. COMPLETO SERVICIO para vehiculos." />
  </NextHead>
}

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string
};

export default Head;