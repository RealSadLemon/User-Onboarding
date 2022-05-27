import * as yup from "yup";

const schema = yup.object().shape({
  first_name: yup.string().trim(),
  last_name: yup.string().trim(),
  pass: yup.string().trim(),
  email: yup
    .string()
    .email("that's... not an email...")
    .required("PUT THE EMAIL IN THE BAG!!!"),
  tos: yup
    .boolean()
    .oneOf([true], "You must accept Terms of Service")
});

export default schema;
