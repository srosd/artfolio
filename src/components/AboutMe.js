import classes from './AboutMe.module.css';
import Paragraph from './UI/Paragraph';
import Image from './UI/Image';
import RegularTitle from './UI/Title';

const AboutMe = () => {
    const text = 'Incididunt irure non proident reprehenderit. Cillum cillum elit nulla commodo qui cupidatat aliquip sit sunt enim dolore aliquip aute. Amet minim veniam Lorem pariatur sint ipsum sit ex proident consectetur. Qui reprehenderit laborum qui consectetur ad consectetur Lorem quis est sint Lorem id eu. Ut qui laborum aute deserunt esse. Et nisi aliquip laboris minim ad tempor. Fugiat consectetur sit proident est qui aute nulla adipisicing laborum elit.';
    return (
        <>
            <RegularTitle className={classes.title}>About me</RegularTitle>
            <div className={classes.container}>
                <Image
                    src='/images/groot.jpg'
                    alt="baby groot portrait"
                    className={classes.thumb} />
                <Paragraph className={classes.mediumText}>
                    {text}
                </Paragraph>
            </div>
        </>
    );
};

export default AboutMe;