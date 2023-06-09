import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Passwordinput = ({word,width}) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return <FormControl sx={{ m: 0, marginTop: 3, width: width?width : "90%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{word}</InputLabel>
        <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
            <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
            >
                {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            </InputAdornment>
        }
        label="Password"
        />
    </FormControl>
}

export default Passwordinput 