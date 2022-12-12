import vector from './assets/images/vector.png';
import fb from './assets/images/fb.png';
import instagram from './assets/images/instagram.jpg';



 function Footer (){
    return(
        <div className="footer">
            <div>
                <h2><img className="vector" src={vector} alt="vector" />Metabnb</h2>
                <div className='social'>
                    <img src={fb} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    
                </div>
                

                <h6>@ 2022 Metabnb</h6>

            </div>
            
           
                <div className='foot'>
                    <h4>Community</h4>
                    <h6>NFT</h6>
                    <h6>Token</h6>
                    <h6>Landlords</h6>
                    <h6>Discord</h6>
                </div>

                <div className='place'>
                    <h4>Place</h4>
                    <h6>Castle</h6>
                    <h6>Farms</h6>
                    <h6>Beach</h6>
                    <h6>Learn more</h6>
                </div>

            
                <div className='about'>
                <h4>About us</h4>
                    <h6>Road map</h6>
                    <h6>Creators</h6>    
                    <h6>Career</h6>
                    <h6>Contact us</h6>
                </div>            
            
           
        </div>
        
            
    )
 }

 export default Footer