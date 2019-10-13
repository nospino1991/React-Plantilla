import React from 'react';
import Navbar from  './Component/Nav';
import Sidebar from './Component/Sidebar';
import Container from './Component/Container';



function App() {
  return (

    <section className="body">
     
         <Navbar />  
         <div className="inner-wrapper">
           <Sidebar />
           <Container />

           </div>
       </section>
    
   
  );
} 
export default App;
