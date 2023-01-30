
import logo from './logo.svg';
import './App.css';
import {useState}from'react';
import React from 'react';
import downArrow from './img/icon_arrow_Down.svg';
import downArrowcopy from './img/icon_arrow_Down_copy.svg';
import purpleCheck from './img/purpleCheck.png';
import brownCheck from './img/brownCheck.png';
import blankCheck from './img/blankCheck.png';
import kakaopay from './img/kakaopay.png';
import styled, { css } from 'styled-components'




//purplebutton 시작
//brownButton시작
function PurpleCheckButton(){
  const [visible,setVisible]=useState(false);
  return(
    <>
      <button className="down-button"
        onClick={()=>{
          setVisible(!visible);
        }}
        >
          {visible?<img src={purpleCheck}></img>:<img src={blankCheck}></img>}
        </button>
        </>
  )
  }

      export function Ref() {
        const [isChecked, setIsChecked] = useState(false);
      
        const onClickCheck = () => {
            setIsChecked(!isChecked);
            console.log(!isChecked);
        };
      
        return (
            <>
                <SCustomCheckboxWrapper>
                    <SCustomCheckbox type="checkbox" isChecked={isChecked} />
                    <SCustomLabel onClick={onClickCheck} isChecked={isChecked} />
                </SCustomCheckboxWrapper>
            </>
        );
      }
      
      const SCustomCheckboxWrapper = styled.div`
        position: relative;
      `;
      
      const SCustomCheckbox = styled.input`
        visibility: hidden;
        ${({ isChecked }) =>
            isChecked
                ? <img src={blankCheck}></img>
                : null}
      `;
      
      const SCustomLabel = styled.label`
        ${({ isChecked }) =>
            isChecked
                ? <img src={purpleCheck}></img>
                : <img src={blankCheck}></img>
          }
      `;
//brownButton 끝
//purplebutton 끝

//brownButton시작
function BrownCheckButton(){
  const [visible,setVisible]=useState(false);
  return(
    <>
      <button className="down-button"
        onClick={()=>{
          setVisible(!visible);
        }}
        >
          {visible?<img src={brownCheck}></img>:<img src={blankCheck}></img>}
        </button>
        </>
  )
  }

      export function RefBrown() {
        const [isChecked, setIsChecked] = useState(false);
      
        const onClickCheck = () => {
            setIsChecked(!isChecked);
            console.log(!isChecked);
        };
      
        return (
            <>
                <SCustomCheckboxBrownWrapper>
                    <SCustomCheckboxBrown type="checkbox" isChecked={isChecked} />
                    <SCustomLabelBrown onClick={onClickCheck} isChecked={isChecked} />
                </SCustomCheckboxBrownWrapper>
            </>
        );
      }
      
      const SCustomCheckboxBrownWrapper = styled.div`
        position: relative;
      `;
      
      const SCustomCheckboxBrown = styled.input`
        visibility: hidden;
        ${({ isChecked }) =>
            isChecked
                ? <img src={blankCheck}></img>
                : null}
      `;
      
      const SCustomLabelBrown = styled.label`
        ${({ isChecked }) =>
            isChecked
                ? <img src={brownCheck}></img>
                : <img src={blankCheck}></img>
          }
      `;
//brownButton 끝







const pointP = ['1,000P','3,000P','5,000P','10,000P','50,000P'];
const pointWon = ['1,000원','3,000원','5,000원','10,000원','50,000원'];

function PointTable(){
  return(
    <>
  <div id="grid-70-1fr-1fr" className="bold-20px point-box point-box-top top-9px">            <PurpleCheckButton></PurpleCheckButton>
      <div className="text-align-left top-12px">{pointP[0]}</div>
      <div className="down-button text-align-right top-12px padding-right-11px thin-16px">{pointWon[0]}</div>  
  </div>
    <div id="grid-70-1fr-1fr" className="bold-20px point-box ">            <PurpleCheckButton></PurpleCheckButton>
    <div className="text-align-left top-12px">{pointP[1]}</div>
    <div className="down-button text-align-right top-12px padding-right-11px thin-16px">{pointWon[1]}</div>  
</div>
<div id="grid-70-1fr-1fr" className="bold-20px point-box ">            <PurpleCheckButton></PurpleCheckButton>
    <div className="text-align-left top-12px">{pointP[2]}</div>
    <div className="down-button text-align-right top-12px padding-right-11px thin-16px">{pointWon[2]}</div>  
</div>
<div id="grid-70-1fr-1fr" className="bold-20px point-box ">            <PurpleCheckButton></PurpleCheckButton>
    <div className="text-align-left top-12px">{pointP[3]}</div>
    <div className="down-button text-align-right top-12px padding-right-11px thin-16px">{pointWon[3]}</div>  
</div>
<div id="grid-70-1fr-1fr" className="bold-20px point-box ">            <PurpleCheckButton></PurpleCheckButton>
    <div className="text-align-left top-12px">{pointP[4]}</div>
    <div className="down-button text-align-right top-12px padding-right-11px thin-16px">{pointWon[4]}</div>  
</div>
</>
  )
}

const Myinfo=()=>{
  return(
    <>
    <div id="grid-1fr-1fr">
    <div className="text-align-left thin-16px top-7px">상업적 용도
    </div>
    <div className="text-align-right thin-16px">이용 가능
    </div>
  </div>
  <div className="margin-top-8px"></div>
  <div id="grid-1fr-1fr" >
  <div className="text-align-left thin-16px">특허 출원
  </div>
  <div className="text-align-right nope">불가능
  </div>
  </div>
  </>
    )
}

//두 번째 페이지 함수

function ChargeNav(){
  return(
    <div className="charge-nav">
        포인트 충전
        <div className="charge-point top-9px">
          충전할 포인트
        </div>
      </div>
  )
}

function Kakaopay(){
  return(
    <div id="grid-70-98-1fr" className="bold-20px point-box-yellow point-box-top-yellow top-9px">            <BrownCheckButton></BrownCheckButton>
  <img className="top-16px"src={kakaopay}></img>
      <div className="down-button text-align-left top-12px padding-right-11px thin-18px">결제</div>  
  </div>
  )
}

function TermCheckBox(){
  const 주문내용='주문 내용과 아래 '
  let 을='을 확인했으며 결제 진행에 동의합니다.'
  return(
    <div id="grid-70-1fr" className="bold-20px point-box point-box-top top-9px">            <PurpleCheckButton></PurpleCheckButton>
    <div>
      <div className="text-align-left thin-14px top-12px">{주문내용}<span className="blue-text">유의사항</span>{을}</div>
      </div>
  </div>
  )
}




function App() {



  const title=['포인트 충전하기', '구매하기']

//post:변수
  let 참조해주세요='을 참고해 주세요.'

  let post='강남 우동 맛집';




  let[글제목, 글제목변경]=useState(['0원','1,000원','3,000원','5,000원','10,000원','50,000원']);

  
  let[따봉,따봉변경]=useState(0);

  

  return (
    <div className="App">


      <title >ChargePoint</title>
      <ChargeNav></ChargeNav>

      <PointTable></PointTable>
      <div className="gray-box-32"></div>
      <div className="bold-20px top-19px">결제 수단</div>
      <Kakaopay></Kakaopay>

      <div id="grid-1fr-1fr" className="bold-20px point-box-transparent top-9px">            
      <div className="bold-20px text-align-left top-12px">결제 금액</div>
      <div className="bold-20px down-button text-align-right top-12px padding-right-11px ">5,000원</div>  
  </div>
        
  <TermCheckBox></TermCheckBox>
  <button className='buy-button top-39px'>결제하기</button>
















    </div>
  );

}

export default App;
