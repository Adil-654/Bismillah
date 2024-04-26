const z = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleat of 3 character" })
    .max(255, { message: "Name must npot more than 255 char" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email" })
    .min(3, { message: "email must be atleat of 3 character" })
    .max(255, { message: "email must npot more than 255 char" }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, { message: "phone must be atleat of 10 character" })
    .max(20, { message: "phone must npot more than 20 char" }),
  password: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "password must be atleat of 3 character" })
    .max(255, { message: "password must npot more than 255 char" }),
});

module.exports = signupSchema;
