"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const SliderButtons = ({ containerStyle, buttonStyle, iconStyle }) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyle}>
            <button className={buttonStyle} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconStyle} />
            </button>

            <button className={buttonStyle} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconStyle} />
            </button>
        </div>
    )
}

export default SliderButtons