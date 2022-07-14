import { useState } from 'react'
import useForm from '../Hooks/useForm'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Forms.css"

export const InvestForm = () => {
    
const fileInput = (e) => setFileTarget(e.target.files[0]);
    const [fileTarget, setFileTarget] = useState("")
    const [form, setForm, handleChange] = useForm({ name: "", address: "", email: "", file: fileTarget, income: "" })

    const submit = (e) => {
        e.preventDefault()
        console.log(form)
        console.log(fileTarget)
    }
  return (
    <form>
            <Box className='Box'>
                <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </Box>
            <Box className='Box'>
                <TextField
                    type="email"
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </Box>
            <Box className='Box'>
                <TextField
                    type="number"
                    id="standard-basic"
                    label="Income"
                    variant="standard"
                    name="income"
                    value={form.income}
                    onChange={handleChange}
                />
            </Box>
            <Box className='Box'>
                <TextField
                    type="text"
                    id="standard-basic"
                    label="Address"
                    variant="standard"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                />
            </Box>
            <Box className='Box'>
                <TextField
                    type="file"
                    id="standard-basic"
                    label="File"
                    variant="standard"
                    name="file"
                    value={form.file.name}
                    onChange={fileInput}
                />
            </Box>
            <div className='Button'>
                <Button onClick={submit} variant="contained" >Submit</Button>
            </div>
        </form>
  )
}
