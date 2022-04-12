import { useState } from "react";

function App() {


  const [showMap, setShowMap] = useState(false)

  return (
    <div>
      <header>
        <img src="/baloon-top.png" className="w-full md:h-72" />
        <div className="main-title">
          <img src="/titulo.png" className="p-2 md:p-8 text-center mx-auto" />
        </div>
        <img
          src="/cinta.png"
          className="sub-title px-8 md:p-8 text-center mx-auto"
        />
      </header>

      <div id="fecha" className="pt-20 flex gap-4 mx-6 md:mx-48 text-center">
        <div className="mx-auto p-0 pl-6 md:p-14">
          <h2>Sábado</h2>
          <h3>14 de mayo</h3>
        </div>
        <div className="w-1 bg-pink-300"></div>
        <div className="mx-auto p-0 my-auto pr-6 md:p-14">
          <h3>De 12:30 hs</h3>
          <h3>a 18:00 hs</h3>
        </div>
      </div>
      <div id="lugar" className="p-14 text-center">
        <img src="/baloon1.png" className="baloon1" />
        <img src="/baloon1.png" className="baloon2" />
        <h2>Dirección:</h2>
        <div className="p-4 pb-12">
          <h3>República de siria 3620</h3>
          <h3>Villanueva</h3>
        </div>
        <div>
          <button onClick={ () => setShowMap(!showMap) } className="p-4 m-2 md:m-8 border-2 border-black rounded-xl font-bold bg-pink-300">
            <h3>Ver ubicación en mapa</h3>
          </button>
        </div>
      </div>

      {showMap ?
      
      <div className="inset-0 p-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.888985376307!2d-68.79485203146288!3d-32.89963258454088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0ebbd83be905%3A0xea8799b09854c9f8!2sRep%C3%BAblica%20de%20Siria%203620%2C%20M5521%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1649780103885!5m2!1ses-419!2sar"
          className="w-full h-72 "
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      :

      null

      }

      
    </div>
  );
}

export default App;
