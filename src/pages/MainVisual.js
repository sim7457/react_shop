import "slick-carousel/slick/slick.css";
import MainSlider from "react-slick";
import { BTN, Inner } from "./common";



const MainVisual = ({ DEFAULT_CONTENTS }) => {
    return (
        <>
            <MainSlider className="MainSlider">
                {
                    DEFAULT_CONTENTS.map((slideItm, slideIndx) => {
                        return (
                            <div className={`itm itm0${slideIndx + 1}`}>
                                <Inner className="inner">
                                    <h2>{slideItm.title}</h2>
                                    <p>{slideItm.description}</p>
                                    <BTN><Link to="/">more</Link></BTN>
                                </Inner>

                            </div>
                        )
                    })
                }
            </MainSlider>
        </>
    )
}

export default MainVisual;