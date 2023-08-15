import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CustomH1 from '../Logo';
import OwlCarousel from 'react-owl-carousel';
import PhotoCarousel from '../photo carousel/PhotoCarousel';
import { Link } from 'react-router-dom';
import Notfound from '../notfound/Notfound';

function ItemDetails() {
  const [gameDetails, setGameDetails] = useState({});
  const [paragraphs, setParagraphs] = useState([]);
  
  const idParam = useParams();

  const gameSpecsData = async (param) => {
    const options = {
      params: { id: param },
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP__API_KEY}`,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.get(
        'https://free-to-play-games-database.p.rapidapi.com/api/game',
        options
      );
      setGameDetails(response.data);
      setParagraphs(response.data.description.split('\n'));
    } catch (error) {
      console.error('Error fetching game data:', error);
    }
  };

  useEffect(() => {
    gameSpecsData(idParam.id);
  }, [idParam.id]);

  const backgroundStyles = {
    backgroundImage: `url(${gameDetails.thumbnail})`
  };

console.log(gameDetails)

return (
  <>
<div className='position-relative'>
  <div className='gamebackground' style={backgroundStyles}>
    <div className='layoutgame'>
      <div className='container d-flex align-items-center h-100 '>
        <div className='hero m-auto text-center'></div>
      </div>
    </div>
    <CustomH1 className='logo game-name'>{gameDetails.title}</CustomH1>
    <CustomH1 className='logo game-genre'>{gameDetails.genre}</CustomH1>
    <CustomH1 className='logo game-publisher'>{gameDetails.publisher}</CustomH1>
  </div>   

</div>

      {/* <div className='spacer layer1'></div> */}
    <div className='container-fluid mt-3 position-relative '>
    <div class="wave1">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
    </svg>
</div>
      <div className='row justify-content-center align-items-center text-center'>
      
        <div className='col-md-5 descriptionparent'>
          <div className='w-75'>
            {paragraphs.map((item, index) => (
              <p className='gamedescription' key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className='col-md-5 mt-5 '>
          
          {gameDetails.minimum_system_requirements ? (
            <ul className='list-group d-flex flex-column list-group-flush'>
            <div className='heading-parent'> <h3 className='text-white fw-bold mb-5'>Minimum System Requirements</h3></div>
             
              <div className='row d-flex flex-row gx-0'>
  <div className='col-md-6'>
    <div className=' pads card-small'>
      <div className='card-minimum card-about'>
      <div >  
      <i className="border-a border-5 rounded-circle ap-icon  fa-solid fa-gears fa-2x"></i>  
                   </div>
                   <h5 class="m-1">os</h5>
                     <h6 class="m-2">{gameDetails.minimum_system_requirements.os}</h6>
      </div>
    </div>
  </div>
  <div className='col-md-6'>
    <div className=' pads card-small'>
      <div className='card-minimum card-about'>
      <div >  
                      <i class="border-a border-5 rounded-circle ap-icon fa-solid fa-gamepad  fa-2x"></i>  
                   </div>
                     <h5 class="m-1">grapgics</h5>
                     <h6 class="m-2">{gameDetails.minimum_system_requirements.graphics}</h6>
      </div>
    </div>
  </div>
</div>


<div className='row d-flex flex-row gx-0'>
  <div className='col-md-6'>
    <div className=' pads card-small'>
      <div className='card-minimum card-about'>
      <div >  
      <i className="fa-solid fa-microchip fa-2x border-a border-5 rounded-circle ap-icon "></i>
                   </div>
                   <h5 class="m-1">processor</h5>
                     <h6 class="m-2">{gameDetails.minimum_system_requirements.processor}</h6>
      </div>
    </div>
  </div>
  <div className='col-md-6'>
    <div className=' pads card-small'>
      <div className='card-minimum card-about'>
      <div >  
                      <i class="border-a border-5 rounded-circle ap-icon  fa-solid fa-memory  fa-2x"></i>  
                   </div>
                     <h5 class="m-1">memory</h5>
                     <h6 class="m-2">{gameDetails.minimum_system_requirements.memory}</h6>
      </div>
    </div>
  </div>
  
</div>

            </ul>
            
            
          ) : (
            <Notfound type={"Requirments are not specified for this game"}></Notfound>
          )}
        </div>
      </div>
  
    </div>
    {}
    {gameDetails.screenshots!=null||undefined?
    
    <PhotoCarousel photos={gameDetails.screenshots} ></PhotoCarousel>:<Notfound type={"Screenshots are not available for this game"}></Notfound>
}  <div className='container-fluid play-section position-relative'>
    <div class="wave3">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
    </svg>


</div>
 
 
 
  </div>
<div className='container m-auto mb-5'>
  <div className='mt-5  m-auto  w-75 justify-content-center align-items-center text-center'>
  <div class="play_now_card_item">
            
      <a href={gameDetails.game_url} class="play_now_card-item_link" target='_blank'>
        <div class="play_now_card-item_bg"></div>
<div className='play_now_card_image' >
<img src={gameDetails.thumbnail} className=' rounded'></img>
</div>
        <div class="play_now_card-item_title text-white">
  play now for free

        </div>

      </a>
    </div>
  </div>
</div>

  <div/>
  </>
);
          }

export default ItemDetails;
