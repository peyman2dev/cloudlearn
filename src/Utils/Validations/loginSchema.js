import * as Yup from 'yup'

const loginSchema = Yup.object({
    identifier: Yup.string().min(4, "Username field is required .."),
    password: Y
})

export default loginSchema 