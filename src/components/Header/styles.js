import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginBottom: '20px',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));