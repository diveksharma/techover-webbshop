import { Typography, Grid, styled, Button, Container, IconButton,} from '@mui/material';
import AddIcon from '@mui/Icons-material/Add';
import RemoveIcon from '@mui/Icons-material/Remove';
import useStyles from './Styles';

const ProductCard = ({loading, title, price, image, id, description, category, rating }) => {
    console.log(image)
    const classes = useStyles(); 
    return (
        <div className={classes.productCard}>
            <div className={classes.productCardFlex}>
                <div className={classes.informationContaioner}>
                    <div className={classes.info}>
                        <img className={classes.img} src={image} alt={title}/>
                        <div className={classes.details}>
                            <Typography variant="Subtitle2">
                                <p className={'{classes.title} {classes.detailMargin}'}>{title}</p>
                            </Typography>
                            <p className={classes.detailMargin}>{price} kr</p>
                        </div>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <IconButton onClick={() => ()}>
                        <AddIcon fontSize="large"> className={classes.button}</AddIcon>
                    </IconButton>
                    <IconButton onClick={() => ()}>
                        <RemoveIcon fontSize="large"> className={classes.button}</RemoveIcon>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;