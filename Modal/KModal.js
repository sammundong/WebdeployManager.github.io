import "../../styles/slick.css"; 
import "../../styles/slick-theme.css";
import '../../styles/Category4.css';
import "../../styles/Slider.css"
import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from "react-slick";

import kyungsung1 from '../../images/kyungsung1.jpg';
import kyungsung2 from '../../images/kyungsung2.jpg';
import kyungsung3 from '../../images/kyungsung3.jpg';
import kyungsung4 from '../../images/kyungsung4.jpg';
import kyungsung5 from '../../images/kyungsung5.jpg';


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
				<h1 className="mapName">경성대점</h1><br></br>
				<div class="slider-content">
					<div class="slider">
        			<Slider {...settings}>
          			<div>
            			<img src={kyungsung1} class="slider-items"></img>
          			</div>
          			<div>
						<img src={kyungsung3} class="slider-items"></img>
						
				 	</div>
				 	<div>
						<img src={kyungsung2} class="slider-items" ></img>
				 	</div>
				 	<div>
						<img src={kyungsung4} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={kyungsung5} class="slider-items"></img>
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