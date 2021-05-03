import Slider from './Slider';
import Title from './UI/Title';

const Products = (props) => {
    return (
        <>
            <Title>Products</Title>
            <Slider
                size='small'
                images={props.images}
                spaceBetween={0}
                slidesPerView={4}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
                navigation={false}
                loop={true}
                pagination={false}
            />
        </>
    );
};

export default Products;