import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from "react-slick";
import "../../styles/slick.css"; 
import "../../styles/slick-theme.css";
import '../../styles/Category4.css';
import "../../styles/Slider.css"

import deogcheon1 from '../../images/deogcheon1.jpg';
import deogcheon2 from '../../images/deogcheon2.jpg';
import deogcheon3 from '../../images/deogcheon3.jpg';
import deogcheon4 from '../../images/deogcheon4.jpg';
import deogcheon5 from '../../images/deogcheon5.jpg';


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
				<h1 className="mapName">덕천점</h1><br></br>
				<div class="slider-content">
					<div class="slider">
        			<Slider {...settings}>
          			<div>
            			<img src={deogcheon1} class="slider-items"></img>
          			</div>
          			<div>
						<img src={deogcheon2} class="slider-items" ></img>
				 	</div>
				 	<div>
						<img src={deogcheon3} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={deogcheon4} class="slider-items"></img>
				 	</div>
				 	<div>
						<img src={deogcheon5} class="slider-items"></img>
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


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Slider and Modal Example</title>
//     <!-- Slick CSS -->
//     <link rel="stylesheet" type="text/css" href="path_to/slick.css"/>
//     <link rel="stylesheet" type="text/css" href="path_to/slick-theme.css"/>
//     <style>
//         /* 여기에 Category4.css 및 Slider.css의 스타일을 포함시키세요 */
//     </style>
// </head>
// <body>
//     <div>
//         <button type="button" id="modalButton">매장 사진 보기</button>
//         <div id="myModal" style="display:none;">
//             <div class="slider-body">
//                 <div>
//                     <h1>덕천점</h1><br>
//                     <div class="slider-content">
//                         <div class="slider">
//                             <!-- Slider 구조 -->
//                             <div>
//                                 <img src="deogcheon1_image_url" class="slider-items">
//                             </div>
//                             <!-- 추가 이미지 divs -->
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <!-- Slick Slider JavaScript -->
//     <script type="text/javascript" src="path_to/jquery.min.js"></script>
//     <script type="text/javascript" src="path_to/slick.min.js"></script>
//     <script>
//         document.addEventListener('DOMContentLoaded', function () {
//             var modal = document.getElementById('myModal');
//             var btn = document.getElementById('modalButton');

//             btn.onclick = function() {
//                 modal.style.display = "block";
//             }

//             // 모달 외부를 클릭하면 닫히게 설정
//             window.onclick = function(event) {
//                 if (event.target == modal) {
//                     modal.style.display = "none";
//                 }
//             }

//             // Slick Slider 초기화
//             $('.slider').slick({
//                 dots: true,
//                 infinite: true,
//                 speed: 1000,
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//             });
//         });
//     </script>
// </body>
// </html>