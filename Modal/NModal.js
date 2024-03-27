import "../../styles/slick.css"; 
import "../../styles/slick-theme.css";
import '../../styles/Category4.css';
import "../../styles/Slider.css"
import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from "react-slick";

import nampo1 from '../../images/nampo1.jpg';
import nampo2 from '../../images/nampo2.jpg';
import nampo3 from '../../images/nampo3.jpg';
import nampo4 from '../../images/nampo4.jpg';
import nampo5 from '../../images/nampo5.jpg';

function Picture() {
	const [modalIsOpen, setModalIsOpen] = useState(false); 
	const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1
    };
	return (
		<div> 
			<button type="button" class="modal" onClick={()=>setModalIsOpen(true)}>매장 사진 보기</button>
			<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} class="openmodal">
			<div class="slider-body">
				<div>
				<h1 className="mapName">남포점</h1><br></br>
				<div class="slider-content">
					<div class="slider">
        			<Slider {...settings}>
          			<div>
						<img src={nampo5} class="slider-items"></img>
            			
          			</div>
          			<div>
						<img src={nampo4} class="slider-items"></img>
						
				 	</div>
				 	<div>
						<img src={nampo1} class="slider-items"></img>
						
				 	</div>
				 	<div>
						<img src={nampo2} class="slider-items" ></img>
				 	</div>
				 	<div>
						<img src={nampo3} class="slider-items"></img>
				 	</div>
					</Slider>
					</div>
				</div>
			</div>
      </div>
			</Modal>
		</div>
	)
}

export default Picture;