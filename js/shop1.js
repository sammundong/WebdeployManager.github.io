document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal-btn').forEach(button => {
    button.addEventListener('click', event => {
      const modal = document.querySelector(button.getAttribute('data-modal-target'));
      openModal(modal);
      initSlides(modal);
    });
  });

  document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
      closeModal(event.target);
    }
  });

  function openModal(modal) {
    modal.style.display = 'block';
  }

  function closeModal(modal) {
    modal.style.display = 'none';
  }

  function initSlides(modal) {
    let slideIndex = 1;
    showSlides(modal, slideIndex);

    // 이전에 추가된 이벤트 리스너 제거 (해당 부분은 예시로 간단화되어 있음)
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    
    // 새 이벤트 리스너 추가
    prevButton.onclick = () => {
      showSlides(modal, slideIndex += -1);
    };
    
    nextButton.onclick = () => {
      showSlides(modal, slideIndex += 1);
    };

    function showSlides(modal, n) {
      let slides = modal.querySelectorAll('.slides img');
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;
      slides.forEach(slide => slide.style.display = "none");
      slides[slideIndex - 1].style.display = "block";
    }
  }
});
// document.addEventListener('DOMContentLoaded', () => {
//   // 모달 열기 버튼에 대한 이벤트 리스너를 추가합니다.
//   document.querySelectorAll('.modal-btn').forEach(button => {
//     button.addEventListener('click', () => {
//       const modal = document.querySelector(button.getAttribute('data-modal-target'));
//       openModal(modal);
//     });
//   });

//   // 모달 닫기 버튼에 대한 이벤트 리스너를 추가합니다.
//   document.querySelectorAll('.close').forEach(button => {
//     button.addEventListener('click', () => {
//       const modal = button.closest('.modal');
//       closeModal(modal);
//     });
//   });

//   // 모달 외부 클릭 시 모달을 닫습니다.
//   window.addEventListener('click', e => {
//     if (e.target.classList.contains('modal')) {
//       closeModal(e.target);
//     }
//   });

//   // 모달을 여는 함수
//   function openModal(modal) {
//     if (modal == null) return;
//     modal.style.display = 'block';
//   }

//   // 모달을 닫는 함수
//   function closeModal(modal) {
//     if (modal == null) return;
//     modal.style.display = 'none';
//   }
// });

// // 기존코드
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById('openModalBtn');

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName('close')[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = 'block';
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = 'none';
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// }


// let slideIndex = 1;
// showSlides(slideIndex);

// // 이전/다음 컨트롤
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // 이미지 슬라이드를 보여주는 함수
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
// }

// document.querySelector(".prev").addEventListener('click', function() {
//   plusSlides(-1);
// });

// document.querySelector(".next").addEventListener('click', function() {
//   plusSlides(1);
// });