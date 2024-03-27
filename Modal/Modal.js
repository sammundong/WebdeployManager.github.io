import { useLocation } from 'react-router-dom';
import '../../styles/PopUp.css';
import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import ModalPortal from '../ModalPortal'
import popUp from '../../images/popUp.png';

const Main = styled.div`
  visibility: ${({ loaded }) => loaded ? 'visible' : 'hidden'};
`;

function Modal({ className, onClose, maskClosable, closable, visible }) {
	const location= useLocation();
    const [isLoaded, setIsLoaded] = useState(false);
	

	const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
        }
    }

    // 이전 방문일
    const VISITED_BEFORE_DATE = localStorage.getItem('VisitCookie')
	// 이전 방문월
    const VISITED_BEFORE_MONTH = localStorage.getItem('VisitMonth')
	// 현재 달 (월)
	const VISITED_NOW_MONTH = Math.floor(new Date().getMonth())+1
	// 현재 날짜 (일)
    const VISITED_NOW_DATE = Math.floor(new Date().getDate())
	
    useEffect(() => {
		// 로드된 뒤 1초가 지난 뒤에 컨텐츠 보여주기
		  setIsLoaded(false);
		  setTimeout(() => {
			setIsLoaded(true);
		  }, 1000);
		
		// 날짜와 일자 쿠키가 있으면
        if ((VISITED_BEFORE_DATE != null) && (VISITED_BEFORE_MONTH != null)){
			if (parseInt(VISITED_BEFORE_MONTH) == VISITED_NOW_MONTH) {
				// 하루가 지났으면 쿠키 지우고 다시 팝업 보여주기
				if (parseInt(VISITED_BEFORE_DATE) <= VISITED_NOW_DATE) {
					localStorage.removeItem('VisitCookie')
					localStorage.removeItem('VisitMonth')
					onClose(true)
				}
				// 날짜가 다를경우 비노출
				if (VISITED_BEFORE_DATE != VISITED_NOW_DATE) {
					onClose(false)
				}	
			}
			// 이전 방문한 월이 현재보다 크든, 작든 이전 날은 지난 것이므로 쿠키 지우고 팝업 띄우기
			else{
				localStorage.removeItem('VisitCookie')
				localStorage.removeItem('VisitMonth')
				onClose(true)
			}
        }
    },[visible, VISITED_BEFORE_DATE, VISITED_NOW_DATE, location])
	
    // 하루동안 팝업 닫기
    const Dayclose = (e) => {
        if (onClose) {
            onClose(e)
            const expiry = new Date()
            // +1일 계산
            const expiryDate = expiry.getDate() + 1
			// 하루 팝업 닫기 눌렀을 때의 월 저장
			const expiryMonth = Math.floor(new Date().getMonth())+1
            // 로컬스토리지 저장
            localStorage.setItem('VisitCookie', expiryDate)
			localStorage.setItem('VisitMonth', expiryMonth);
        }
    }

    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    }
    return (
		<Main loaded={isLoaded}>
        <ModalPortal elementId="modal-root">
            <ModalOverlay visible={visible} />
            <ModalWrapper
                className={className}
                onClick={maskClosable ? onMaskClick : null}
                tabIndex="-1"
                visible={visible}
            >
                <div tabIndex="0" className="modal-inner">
                    <ModalInner2>
                        <div className="ImgStyle">
                            <a href="https://band.us/band/84554269" rel="noopener noreferrer" target={'_blank'} cursor="pointer">
                                <img src={popUp} style={{ width: '100%', height: '100%' }} alt="" />
                            </a>
                        </div>
                        {closable && (
                            <CloseStyle>
                                <Close className="modal-close" onClick={() => Dayclose()}>
                                    오늘 하루 닫기
                                </Close>
                                <Close className="modal-close" onClick={() => close()}>
                                    닫기
                                </Close>
                            </CloseStyle>
                        )}
                    </ModalInner2>
                </div>
            </ModalWrapper>
        </ModalPortal>
		</Main>
    )
}

Modal.propTypes = {
}

const ModalInner2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const CloseStyle = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #282828;
	width: 100%;
    padding: 1px;
    border-radius: 0 0 15px 15px;
    color: #ffffff;
`

const Close = styled.span`
    cursor: pointer;
`

const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
`

const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
`


export default React.memo(Modal);
