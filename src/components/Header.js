import Navbar from "./Navbar"
import Slider from "./Slider"

const Header = (props) => {
    return (
        <>
            <Navbar />
            <Slider
                size='big'
                images={props.images}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={true}
                loop={true}
                pagination={{ clickable: true }} />
        </>
    );
};

export default Header;