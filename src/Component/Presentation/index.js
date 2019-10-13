import React from 'react';

function Presentation(){
    return (
          <section id="intro" className="clearfix">
             <div className="container">
                <div className="intro-img">
                   <img src="img/intro-img.svg" alt="" className="img-fluid"/>
               </div>
             <div className="intro-info">
               <h2>Portal de Auditoría</h2>
             <div>
               <a href="#about" className="btn-get-started scrollto">Objetivo</a>
               <a href="#services" className="btn-services scrollto">Conocenos</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
export default Presentation;
