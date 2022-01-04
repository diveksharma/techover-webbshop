import {createStyles, makeStyles} from 'mui/styles';

const useStyles = makeStyles((theme) =>    
    createStyles({
        productCard: {
            positon: 'relative',
            width: '100%',
            height: 130,
            backgroundColor: '#rrrrr',
            boxshadow: '8px, 2px, 1px, 8px, rgba(0, 0, 0.1)'
        },
        productCardFlex: {
            display: 'felx',
            position: 'relative',
            height: '100%',
            width: '90%',
            margin: 'auto',
        },
        informationContaioner: {
            position: 'relative',
            width: '90%',
            left: 0,

        },    
        info: {
            display: 'flex',
            justifycontent: 'flext-start',
            alignItems: 'center',
            paddingleft: 120,
            width: '80%',
            leff: 0,
            height: '128px',
            margin: 0,
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%)',
        },
        img: {
            width: 65,
            marginright: 20,
            objectfit: 'conatain,'
        },
        details: {},
        title: {},
        detailMargin: {},
        buttons: {},
    })

);

export default useStyles;