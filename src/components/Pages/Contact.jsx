import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useForm from '../../hooks/useForm'
import "../Forms.css"


export const Contact = () => {



    const [form, setForm, handleChange] = useForm({ email: "", })

    const submit = (e) => {
        e.preventDefault();
        console.log("email: ", form.email);

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                "email": form.email
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try{
            fetch("https://mortgage-defi-api.herokuapp.com/api/v1/email/sendEmail", requestOptions).then( console.log("email sent."));

        }
        catch{
            alert("Error");
        }
    }

    return (
        <form>
            <Box className='Box'>
                <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </Box>
            <div className='Button'>
                <Button onClick={submit} variant="contained" >Submit</Button>
            </div>
        </form>
    )
}