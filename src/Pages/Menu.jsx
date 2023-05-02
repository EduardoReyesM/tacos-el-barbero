import React from 'react'
import img5 from '../images/taquero.jpg'
import img6 from '../images/asada-taco.jpeg'
import img7 from '../images/suaderoimg.jpeg'
import img8 from '../images/taco-carnitas.webp'
import img9 from '../images/taco-campechano.jpeg'
import img10 from '../images/taco-chicharron.jpeg'
import img11 from '../images/tacos-salsa-huevo.jpeg'

const Menu = () => {
  return (
    <div className='Align-Menu'>
        <div >
            <img className='img-height' src={img5} alt='photo'/>
        </div>

        <div>
            <h1 className='Menu-center'>Menu</h1>


            <div className='right-menu'>
                <div>
                    <img src={img6} alt='photo' width='210px' className='photo-radius' />
                    <h3>Asada</h3>
                    <h4>Price: $20 MXN</h4>
                </div>

                <div className='align-contentimg'>
                    <img src={img7} alt='photo' width='210px' className='photo-radius' />
                    <h3>Suadero</h3>
                    <h4>Price: $15 MXN</h4>
                </div>
            </div>

      
            <div className='right-menu'>
                <div>
                    <img src={img8} alt='photo' width='210px' height='194px' className='photo-radius'/>
                    <h3>Carnitas</h3>
                    <h4>Price: $17 MXN</h4>
                </div>

                <div className='align-contentimg'>
                    <img src={img9} alt='photo' width='210px' className='photo-radius'/>
                    <h3>Campechanos</h3>
                    <h4>Price: $15 MXN</h4>
                </div>
            </div>

            <div className='right-menu'>
                <div>
                    <img src={img10} alt='photo' width='210px' className='photo-radius' />
                    <h3>Chicharron</h3>
                    <h4>Price: $18 MXN</h4>
                </div>

                <div className='align-contentimg'>
                    <img src={img11} alt='photo' width='160px' className='photo-radius' />
                    <h3>Salsa con Huevo</h3>
                    <h4>Price: $16 MXN</h4>
                </div>
            </div>
      
        </div>
    </div>
  )
}

export default Menu;