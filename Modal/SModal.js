import "../../styles/slick.css"; 
import "../../styles/slick-theme.css";
import '../../styles/Category4.css';
import "../../styles/Slider.css"
import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from "react-slick";

import seomyeon1 from '../../images/seomyeon1.jpg';
import seomyeon2 from '../../images/seomyeon2.jpg';
import seomyeon3 from '../../images/seomyeon3.jpg';
import seomyeon4 from '../../images/seomyeon4.jpg';
import seomyeon5 from '../../images/seomyeon5.jpg';

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
				<h1 className="mapName">서면점</h1><br></br>
				<div class="slider-content">
					<div class="slider">
        			<Slider {...settings}>
          			<div>
						<img src={seomyeon2} class="slider-items" ></img>
            			
          			</div>
          			<div>
						<img src={seomyeon3} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={seomyeon1} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={seomyeon4} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={seomyeon5} class="slider-items"></img>
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