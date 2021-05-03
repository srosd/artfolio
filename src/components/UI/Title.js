import classes from './Title.module.css';

const RegularTitle = (props) => {
    return <h2 className={classes.title}>{props.children}</h2>
};

export default RegularTitle;