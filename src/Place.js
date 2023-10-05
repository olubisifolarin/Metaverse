
import React from "react"
import gro from './assets/images/gro.png';
import grou from './assets/images/grou.png';
import group from './assets/images/group.png';
import ren from './assets/images/ren.png';
import rent from './assets/images/rent.png';
import renta from './assets/images/renta.png';
import rentag from './assets/images/rentag.png';
import rentage from './assets/images/rentage.png';



function Place  (){
   
        return(
            <div className="stay">
                <div className="castle">
                    <h3>Restaurant</h3>
                    <h3>Cottage</h3>
                    <h3>Castle</h3>
                    <h3>Beach</h3>
                    <h3>Fantast City</h3>
                    <h3>Cabins</h3>
                    <h3>Off-grid</h3>
                    <h3>Farm</h3>
                    <h3>Location</h3>  
                </div>
                
                <div className="group-place">
                    <img className="group" src={gro} alt='rent 1' /> 
                    <img className="group"src={group} alt='rent 2' />
                    <img className="group"src={ren} alt='rent 3' /> 
                    <img className="group"src={rentage} alt='rent 4' />
                    <img className="group"src={grou} alt='rent 5' />
                    <img className="group"src={rentag} alt='rent 6' />
                    <img className="group"src={rent} alt='rent 7' />
                    <img className="group"src={renta} alt='rent 8' />
                    <img className="group"src={group} alt='rent 9' />
                </div>
               
            </div>
        )
    }
    
    

export default Place