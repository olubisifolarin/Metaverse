import nf from './assets/images/nf.png';
import nft from './assets/images/nft.png';
import nfts from './assets/images/nfts.png';

const NFTs = () => {
    return(
            <div className="nfts">

                <div className='metaNft'>
                    <h2 className='metabnb'>Metabnb NFTs</h2><br></br>
                    <p>Discover our NFT gift cards collection, loyal customers get amazing gift cards<br></br> which are traded as NFTs. These NFTs gives our customer access to loads of our <br></br> exclusive services.</p>
                    <button className='NftBtn bg-white m-3'>Learn More</button>
                </div>
                    
            
                <div className='col-6 nftImg'>
                    <img className='nftImg'  src={nf} alt='nft 1' />
                    <img className='nftImg' src={nft} alt='nft 2' />
                    <img className='nftImg' src={nfts} alt='nft 3' />
                
                </div>
                
            </div>
       
       


    )

}

export default NFTs