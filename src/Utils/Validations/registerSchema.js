import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
    name: Yup.string().matches(/[\w]{3,}\s[\w]{3,}/g, "Full name must contain at least one space and be at least three characters long").min(4, "Phone field minimum length is 4 characters ..").required("name field need a require value .."),
    username: Yup.string().min(3, "username field minimum length is 3 characters..").required("username field need a require value .."),
    email: Yup.string().matches(/^[\w]+@[\w]{3,5}\.[\w]{2,4}$/g, "Please enter a valid email addres..").required("Email address is a required field .."),
    phone: Yup.string().matches(/^\d{11}$/g, "Invalid phone number. The phone number must contain exactly 11 digits.").min(11, "Phone number field minimum length is 11 characters ..").max(11, "Phone field maximum length is 11 characters ..").required("phone field need a require value .."),
    password: Yup.string().min(8, "Phone field minimum length is 8 characters ..").required("password field need a require value ..")

})

export default registerSchema