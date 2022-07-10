import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useForm from '../hooks/useForm'
import "./Forms.css"


export const Apply = () => {
    


    const [form, setForm, handleChange] = useForm({ email: "", })

    const submit = (e) => {
        e.preventDefault()
        console.log(form)
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
                <Button onClick={submit} variant="contained" >Subimt</Button>
            </div>
        </form>
    )
}
