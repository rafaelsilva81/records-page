import Head from 'next/head'
import { faBars, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faTwitch, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Podbangos, podcast"/>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Página Web do podcast mais BANGOS do Brasil!" />
      </Head>

      <div className="header">
        <nav className="py-2 bg-gray-900 md:py-4">
          <div className="container px-4 mx-auto md:px-6 md:flex md:items-center">

            <div className="flex items-center justify-between">
              <a href="#" className="font-sans text-2xl font-bold text-primary"> LOGO_AQUI </a>
              <button className="text-xl text-white transition duration-300 hover:text-primary md:hidden"> 
                <FontAwesomeIcon icon={faBars}/> 
              </button>
            </div>

            <div className="flex-col hidden mt-3 md:flex md:flex-row md:ml-auto md:mt-0">
              <a href="#" className="font-bold text-white link-button">Sobre</a>
              <a href="#" className="font-bold text-white link-button">Episódios</a>
              <a href="#" className="font-bold text-white link-button">Parceiros</a>
              <a href="#" className="font-bold text-white link-button">Contato</a>
            </div>

            <div className="hidden md:flex md:flex-row md:ml-auto md:mt-0">
              <a href="#" className="font-bold text-white link-button md:px-0 hover:text-blue-700">
                <FontAwesomeIcon icon={faFacebookF} size="lg"/> 
              </a>
              <a href="#" className="font-bold text-white link-button md:px-0 hover:text-pink-500">
                <FontAwesomeIcon icon={faInstagram} size="lg"/> 
              </a>
              <a href="#" className="font-bold text-white link-button md:px-0 hover:text-purple-600">
                <FontAwesomeIcon icon={faTwitch} size="lg"/> 
              </a>
              <a href="#" className="font-bold text-white link-button md:px-0 hover:text-green-500">
                <FontAwesomeIcon icon={faSpotify} size="lg"/> 
              </a>
            </div>
            
          </div>  
        </nav>
      </div>

      <div className="h-screen px-4 mx-auto bg-gray-900 main md:px-6"> 
        <div className="flex flex-col items-center justify-center md:py-6 md:px-10 bg-secondary md:justify-between md:flex-row md:rounded-2xl">
          <div className="flex flex-col mr-14 items-left">
            <h1 className="text-4xl font-extrabold text-white md:my-3 lg:text-8xl md:text-7xl"> PODBANGOS </h1>
            <p className="text-white md:text-2xl"> Os famosos especialistas em porra nem uma, sem roteiro, apenas amigos trocando uma ideia </p>
            <div className="flex md:flex-row">
              <button className="btn"> Conheça Melhor </button>
              <button className="btn-outline"> 
                Ver Episódios
              </button>
            </div>
          </div>
          <Image
              src="/logo1.png"
              alt="Imagem do podcast"
              width={500}
              height={500}
          />
        </div>
      </div>
    </>
  )
}
