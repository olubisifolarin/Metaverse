import React from 'react'
import ima from './assets/images/ima.png';
import imag from './assets/images/imag.png';
import img from './assets/images/img.png';
import image from './assets/images/image.png';
import gro from './assets/images/gro.png';
import grou from './assets/images/grou.png';
import group from './assets/images/group.png';
import ren from './assets/images/ren.png';
import rent from './assets/images/rent.png';
import renta from './assets/images/renta.png';
import rentag from './assets/images/rentag.png';
import rentage from './assets/images/rentage.png';
import nf from './assets/images/nf.png';
import nft from './assets/images/nft.png';
import nfts from './assets/images/nfts.png';





function Home (){
    
        return(
        
            <div className='project'>
                <div className='home'>
                    <div className='rent'>
                        <h2 className='provide'>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h2>
                        <p className='provide'>We provide you access to luxury and affordable houses in the metaverse, get a chance to get a chance to turn your <br></br>imagination to reality at your comfort zone.</p>
                        <input type="text" className="sea" name="search" placeholder="Search" />
                        <button className="search" type="search">Search</button>
                    </div>

                    <div className='rentag'>
                        <img className="renting" src={ima} alt="image1" />
                        <img className="renting" src={img} alt="image2" />                    
                        <img className="renting" src={image} alt="image3" />
                        <img className="renting" src={imag} alt="image4" />
                    
                    </div>

                </div>

                    <div className='token'>
                        <h4 className='mb'>MBToken</h4>
                        <h4 className='mb'>METAMASK</h4>
                        <h4 className='mb'>OpenSea</h4>
                    </div>
                    


                    <div className='rentage'>
                        <h5>Inspiration for your next adventure</h5>
                        <img className="group" src={gro} alt='rent 1' /> 
                        <img className="group" src={group} alt='rent 2' />
                        <img className="group" src={ren} alt='rent 3' /> 
                        <img className="group" src={rentage} alt='rent 4' />
                        <img className="group" src={grou} alt='rent 5' />
                        <img className="group" src={rentag} alt='rent 6' />
                        <img className="group" src={rent} alt='rent 7' />
                        <img className="group" src={renta} alt='rent 8' />
                        <img className="group" src={group} alt='rent 2' />
                    </div>

                    <div className="nfts">
                        <div className='metaNft'>
                            <h2>Metabnb NFTs</h2><br></br>
                            <p>Discover our NFT gift cards collection, loyal customers get amazing gift cards<br></br> which are traded as NFTs. These NFTs gives our customer access to loads of our <br></br> exclusive services.</p>
                            <button className='btn bg-white text-dark m-3'>Learn More</button>
                        </div>
                            
                        <div className='nftImg'>
                            <img className='nftImg'  src={nf} alt='nft 1' />
                            <img className='nftImg' src={nft} alt='nft 2' />
                            <img className='nftImg' src={nfts} alt='nft 3' />
                        
                        </div>
                    </div>
                

                    
            </div>
    
           

                
        )
    }
    


export default Home