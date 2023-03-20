import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const EmailInput = () => {
    return <TextField
        label="Email"
        id="outlined-start-adornment"
        sx={{ m: 0, marginTop: 3, width: '85ch' }}
        InputProps={{
        startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
    />
    
}

export default EmailInput
