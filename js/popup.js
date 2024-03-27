document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalWrapper = document.querySelector('.modal-wrapper');
    const VISITED_BEFORE_DATE = localStorage.getItem('VisitCookie');
    const VISITED_BEFORE_MONTH = localStorage.getItem('VisitMonth');
    const VISITED_NOW_MONTH = new Date().getMonth() + 1;
    const VISITED_NOW_DATE = new Date().getDate();

    function showModal() {
        modalOverlay.style.display = 'block';
        modalWrapper.style.display = 'block';

        // Close buttons
        document.getElementById('close-modal').addEventListener('click', closeModal);
        document.getElementById('close-for-today').addEventListener('click', closeForToday);
    }

    // This function closes the modal if the clicked area is not the content itself.
    modalOverlay.addEventListener('click', function(event) {
        // This checks if the clicked area is not the modal content (modal-inner).
        if (!event.target.closest('.modal-inner')) {
            closeModal();
        }
    });

    function closeModal() {
        modalOverlay.style.display = 'none';
        modalWrapper.style.display = 'none';
    }

    function closeForToday() {
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 1); // Setting it to the next day
        localStorage.setItem('VisitCookie', expiry.getDate());
        localStorage.setItem('VisitMonth', expiry.getMonth() + 1);
        closeModal();
    }

    // Check to display modal
    if (!VISITED_BEFORE_DATE || !VISITED_BEFORE_MONTH || (parseInt(VISITED_BEFORE_MONTH) !== VISITED_NOW_MONTH) || (parseInt(VISITED_BEFORE_DATE) < VISITED_NOW_DATE)) {
        showModal();
    }
});
// document.addEventListener('DOMContentLoaded', function() {
//     const modalRoot = document.getElementById('modal-root');
//     const VISITED_BEFORE_DATE = localStorage.getItem('VisitCookie');
//     const VISITED_BEFORE_MONTH = localStorage.getItem('VisitMonth');
//     const VISITED_NOW_MONTH = new Date().getMonth() + 1;
//     const VISITED_NOW_DATE = new Date().getDate();

//     function showModal() {
//         // 모달 HTML 구조 생성
//         document.getElementById('modal-overlay').style.display = 'block';
//         document.querySelector('.modal-wrapper').style.display = 'block';

//         // 이벤트 리스너 바인딩
//         document.getElementById('close-modal').addEventListener('click', closeModal);
//         document.getElementById('close-for-today').addEventListener('click', closeForToday);
//     }

//     function closeModal() {
//         document.getElementById('modal-overlay').style.display = 'none';
//         document.querySelector('.modal-wrapper').style.display = 'none';
//     }

//     function closeForToday() {
//         const expiry = new Date();
//         expiry.setDate(expiry.getDate() + 1); // 다음날로 설정
//         localStorage.setItem('VisitCookie', expiry.getDate());
//         localStorage.setItem('VisitMonth', expiry.getMonth() + 1);
//         closeModal();
//     }

//     // 모달 표시 조건 검사
//     if (!VISITED_BEFORE_DATE || !VISITED_BEFORE_MONTH || (parseInt(VISITED_BEFORE_MONTH) !== VISITED_NOW_MONTH) || (parseInt(VISITED_BEFORE_DATE) < VISITED_NOW_DATE)) {
//         showModal();
//     }
// });