import * as Yup from 'yup'

const emailSchema =  Yup.object().shape({
    email: Yup.string().email().min(7).required()
})

export default emailSchema 