import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from "react-slick";
import "../styles/slick.css"; 

import haeundae1 from '../../images/haeundae1.jpg';
import haeundae2 from '../../images/haeundae2.jpg';
import haeundae3 from '../../images/haeundae3.jpg';
import haeundae4 from '../../images/haeundae4.jpg';



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
				<h1 className="mapName">해운대점</h1><br></br>
				<div class="slider-content">
					<div class="slider">
        			<Slider {...settings}>
          			<div>
            			<img src={haeundae1} class="slider-items"></img>
          			</div>
          			<div>
						<img src={haeundae2} class="slider-items" ></img>
				 	</div>
				 	<div>
						<img src={haeundae3} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={haeundae4} class="slider-items"></img>
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