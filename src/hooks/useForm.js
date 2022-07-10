import { useState } from 'react'

const useForm = (inicial) => {
    const [form, setFormulario] = useState(inicial)
    const handleChange =(e) => {
        setFormulario({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    console.log(form)
    return[form,setFormulario,handleChange]
}

export default useForm 