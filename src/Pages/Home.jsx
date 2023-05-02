import React from 'react'
import img2 from '../images/Suadero.jpg'
import img3 from '../images/Campechano.jpg'
import img4 from '../images/Carnitas.jpg'


const Home = () => {
  return (
    <div>
        <div className='Main-image'>Best Tacos In CDMX
        </div>

        <div className='align-setup'>
            <div>
                <h3>Suadero</h3>
                <img src={img2} alt='image' width='250px'/>
                <p>Los Tacos Siempre echos todas las mañanas con 
                  <br/>la mejor calidad de Carne en el Mercado.
                   <br/> Se Traer del sureste de Mexico para que en las mañana
                   <br/> este preparada y prover la mejor calidad para ustedes. 
                 </p>
            </div>
            
            <div>
                <h3>Campechanos</h3>
                <img src={img3} alt='image' height='200px'/>
                <p>Típicamente los tacos campechanos son una mezcla de distintos 
                   <br/> tipos de carne, como chorizo y res, suadero y longaniza, carnitas y 
                   <br/> chicharrón, o tripa y suadero, tu decides cómo quieres combinarlos. 
                   <br/> Estos llevan un poco de chicharrón, tortillas recién hechas en casa 
                   <br/> y por supuesto, salsa verde cruda.</p>
            </div>

            <div>
                <h3>Carnitas</h3>
                <img src={img4} alt='image' height='200px'/>
                <p>
                <br/> Chamorro. La parte más atractiva de cualquier pierna. En una mordida te llevas 
                <br/> un pedacito de grasa y otro de carne. Su sabor no es vibrante, pero, eso sí, tiene 
                <br/> más carácter que un taco de maciza.</p>
            </div>
        </div>
    </div>
  )
}

export default Home;