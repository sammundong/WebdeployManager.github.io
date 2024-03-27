import "../../styles/slick.css"; 
import "../../styles/slick-theme.css";
import '../../styles/Category4.css';
import "../../styles/Slider.css"
import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from "react-slick";

import jangyu1 from '../../images/jangyu1.jpg';
import jangyu2 from '../../images/jangyu2.jpg';
import jangyu3 from '../../images/jangyu3.jpg';
import jangyu4 from '../../images/jangyu4.jpg';
import jangyu5 from '../../images/jangyu5.jpg';


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
				<h1 className="mapName">장유점</h1><br></br>
				<div class="slider-content">
					<div class="slider">
        			<Slider {...settings}>
          			<div>
            			<img src={jangyu1} class="slider-items"></img>
          			</div>
          			<div>
						<img src={jangyu3} class="slider-items"></img>
						
				 	</div>
				 	<div>
						<img src={jangyu2} class="slider-items" ></img>
				 	</div>
				 	<div>
						<img src={jangyu4} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={jangyu5} class="slider-items"></img>
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