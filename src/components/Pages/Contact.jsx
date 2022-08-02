import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useForm from '../../hooks/useForm'
import "../Forms.css"
import { Typography, Paper } from '@mui/material';


export const Contact = () => {

    const boxSX = {
        backgroundColor: "#ff914d",
        width:"70%",
        "&:hover": {
          color: 'white',
          backgroundColor: '#ffbd59'
        },
        justifyContent: 'center',
        m: 2
      };

    const [form, setForm, handleChange] = useForm({ 
        subject: "", 
        email: "",
        message: "",
    })

    const submit = (e) => {
        e.preventDefault();
        console.log("email: ", form.email);

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                "subject": form.subject,
                "email": form.email,
                "message": form.message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try{
            fetch(process.env.REACT_APP_MORTGAGE_API, requestOptions).then( console.log("email sent."));
            
        }
        catch{
            alert("Error");
        }
    }

    return (
        <form>
            <Box sx={{display:"flex", flexDirection:"column", minHeight:"85vh", alignItems:"center", justifyContent: "center"}}>
                <Paper elevation={8}>
                    <Box sx={{background:"#ffbd59", py:3, px:6, borderRadius:1}}>
                        <Typography variant="h6" >CONTACT US</Typography>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column", px:4, py:2, gridRowGap:13, minWidth:"35vw", alignItems:"center", justifyContent: "center"}}>
                        <TextField size="small" fullWidth
                            label="Subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                        />
                        <TextField size="small" fullWidth
                            label="Email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        <TextField multiline fullWidth rows={6} size="small"
                            label="Message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                        />
                        <Button sx={boxSX} onClick={submit} variant="contained" >Submit</Button>
                    </Box>
                </Paper>
            </Box>
        </form>
    )
}
