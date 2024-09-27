import React from 'react'
import candado from '../../../assets/images/candado.jpg'
import virus from '../../../assets/images/virus.jpg';
import Malware from '../../../assets/images/Malware.jpg'

export const About = () => {
  return (
    /* Creación del componente de Acerca de */
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className='image-about'>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={virus} className="d-block w-100" alt="virus"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={Malware} className="d-block w-100" alt="Malware"/>
          </div>
          <div className="carousel-item">
            <img src={candado} className="d-block w-100" alt="candado-security"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
      <h1 className='title-about'>Misión</h1>
      <p className='text-center text-one'>
        Buscamos establecer medidas de seguridad de forma gratuita para el usuario con el fin de utilizar nuestra herramienta de análisis de archivos para ver las vulnerabilidades de los archivos descargados, así promoviendo más seguridad al usuario.
      </p>
      <h2>Visión</h2>
      <p className='text-center mb-4 text-two'>
        Aplicación web que se encarga de detectar posibles vulnerabilidades de archivos, dedicada a todos los usuarios. Ofrece un buen funcionamiento, por el cual el sistema recibe las peticiones de los archivos y muestra los resultados.
      </p>
    </div>
  )
}
