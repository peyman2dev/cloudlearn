import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
    name: Yup.string().min(4).required(),
    username: Yup.string().min(5).required(),
    email: Yup.string().email().required(),
    phone: Yup.string().min(11).max(11).required(),
    password: Yup.string().min(8).required(),

})

export default registerSchema