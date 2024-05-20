import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Blue color
        },
        secondary: {
            main: '#ffd700', // Gold color
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    backgroundColor: '#1976d2',
                    color: '#ffffff',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label.Mui-focused': {
                        color: '#ffd700',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#ffd700',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#ffd700',
                        },
                        '&:hover fieldset': {
                            borderColor: '#ffd700',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#ffd700',
                        },
                        '& input': {
                            color: '#ffd700',
                        },
                    },
                },
            },
        },
    },
});

export default theme;
