import React from 'react'
import img12 from '../images/tacos-aboutus.jpeg'
import img13 from '../images/instagram.avif'
import img14 from '../images/facebook-log.ico'
import img15 from '../images/tiktok-log.png'

const Aboutus = () => {
  return (
    <> 
        <div className='about-us-img'>
            <img src={img12} alt='img' width='1300px' height='400px'/>
        </div>
        <div className='about-us-asign'>
            <h1>ABOUT US</h1>
            <p>Tacos El Barbero Nacio En el Corazon de la Ciudad De Mexico.
              El dueño se llama Eduardo y Nacio en Chicoloapan en Agosto 21 de 1975.
              Su inspiracio por la comida empeso desde niño ya que su mama cocinaba
              comida deliciosa y se inspiro en los platillos de su mama. El Barbero empeso
              en el año 2015 ya que ahorro de todos los años de trabajo y esfuerzo y cumplir 
              su sueño de abrir su propio negocio de comida. 
            </p>
        </div>

        <div className='aboutus-SNW'>
           <h1>Follow Us:</h1>
           <img src={img13} alt="Instagram" width='100px'/>
           <img src={img14} alt="Facebook" width='100px'/>
           <img src={img15} alt="Tiktok" width='80px' height='90px'/>
        </div>

    </>
  )
}

export default Aboutus;