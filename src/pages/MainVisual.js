import "slick-carousel/slick/slick.css";
import MainSlide from "react-slick";
import { BTN, Inner } from "./common";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const MainVisual = ({ DEFAULT_CONTENTS }) => {
    const option = {
        arrows: false,
        afterChange: idx => setSNum(idx)
    }

    const s = useRef(null);
    const [sNum, setSNum] = useState(0)

    return (
        <>
            <MainSlide
                {...option}
                ref={s}
                className={`MainSlide`}
            >
                {
                    DEFAULT_CONTENTS.map((slideItm, slideIndx) => {
                        return (
                            <div key={slideIndx} className={`itm itm0${slideIndx + 1} ${slideIndx === sNum ? 'on' : ''}`}>
                                <Inner className="inner">
                                    <h2>{slideItm.title}</h2>
                                    <p>{slideItm.description}</p>
                                    <BTN color={slideItm.color}><Link to='/'>more</Link></BTN>
                                </Inner>
                            </div>
                        )
                    })
                }
            </MainSlide>
            <div className="arrows">
                {console.log(s.current)}
                <button onClick={() => s.current.slickPrev()}>뒤로가기</button>
                <button onClick={() => s.current.slickNext()}>앞로가기</button>
            </div>
            <div className="num">
                현재슬라이드의 번호 : {sNum + 1}
                전체슬라이드갯수 : {DEFAULT_CONTENTS.length}
            </div>

            <ul>
                {
                    DEFAULT_CONTENTS.map((_, slideIndx) => {
                        return (
                            <li><button onClick={() => s.current.slickGoTo(slideIndx)}>{slideIndx + 1}</button></li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default MainVisual;