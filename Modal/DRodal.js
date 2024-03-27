import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from "react-slick";
import "../../styles/slick.css"; 
import "../../styles/slick-theme.css";
import '../../styles/Category4.css';
import "../../styles/Slider.css"

import Dongrae1 from '../../images/Dongrae1.jpg';
import Dongrae2 from '../../images/Dongrae2.jpg';
import Dongrae3 from '../../images/Dongrae3.jpg';
import Dongrae4 from '../../images/Dongrae4.jpg';
import Dongrae5 from '../../images/Dongrae5.jpg';


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
				<h1 className="mapName">동래점</h1><br></br>
				<div class="slider-content">
					<div class="slider">
        			<Slider {...settings}>
          			<div>
            			<img src={Dongrae1} class="slider-items"></img>
          			</div>
          			<div>
						<img src={Dongrae2} class="slider-items" ></img>
				 	</div>
				 	<div>
						<img src={Dongrae3} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={Dongrae4} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={Dongrae5} class="slider-items"></img>
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