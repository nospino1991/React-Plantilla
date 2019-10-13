import React from 'react';
import Count from '../Count';

function Container_Count(){
                    return (
                         <section id="services" className="section-bg">
                            <div className="container">
                              <header className="section-header">
                                  <h3>Conteos</h3>
                                  <p>Conteos Desde __/__/___ hasta __/__/___</p>
                              </header>
                           <div className="row">
                                <Count/>
                                 <Count/>
                                  <Count/>
                                   <Count/>
                                    <Count/>
                                     <Count/>
                       </div>
                 </div>
           </section>

)
}
export default Container_Count;