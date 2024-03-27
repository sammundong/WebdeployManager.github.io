import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from "react-slick";
import "../../styles/slick.css"; 
import "../../styles/slick-theme.css";
import '../../styles/Category4.css';
import "../../styles/Slider.css"

import hadan_in1 from '../../images/hadan_in1.jpg';
import hadan_in2 from '../../images/hadan_in2.jpg';
import hadan_out1 from '../../images/hadan_out1.jpg';
import hadan_play1 from '../../images/hadan_play1.jpg';
import hadan_play2 from '../../images/hadan_play2.jpg';

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
				<h1 className="mapName">하단점</h1><br></br>
				<div class="slider-content">
					<div class="slider">
        			<Slider {...settings}>
          			<div>
            			<img src={hadan_out1} class="slider-items"></img>
          			</div>
          			<div>
						<img src={hadan_in2} class="slider-items" ></img>
				 	</div>
				 	<div>
						<img src={hadan_in1} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={hadan_play1} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={hadan_play2} class="slider-items"></img>
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