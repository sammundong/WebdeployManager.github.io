import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from "react-slick";
import "../../styles/slick.css"; 
import "../../styles/slick-theme.css";
import '../../styles/Category4.css';
import "../../styles/Slider.css"

import gwangalli1 from '../../images/gwangalli1.jpg';
import gwangalli2 from '../../images/gwangalli2.jpg';
import gwangalli3 from '../../images/gwangalli3.jpg';
import gwangalli4 from '../../images/gwangalli4.jpg';
import gwangalli5 from '../../images/gwangalli5.jpg';


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
				<h1 className="mapName">광안점</h1><br></br>
				<div class="slider-content">
					<div class="slider">
        			<Slider {...settings}>
          			<div>
            			<img src={gwangalli1} class="slider-items"></img>
          			</div>
          			<div>
						<img src={gwangalli2} class="slider-items" ></img>
				 	</div>
				 	<div>
						<img src={gwangalli3} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={gwangalli4} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={gwangalli5} class="slider-items"></img>
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