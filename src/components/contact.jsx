import { supabase } from "../lib/supabase"
async function submitForm(data) {
  const { error } = await supabase
    .from("contact_submissions")
    .insert([data])

  if (error) {
    console.log(error)
  } else {
    console.log("Form submitted successfully")
  }
}

const handleSubmit = async (e) => {
  e.preventDefault()

  const data = {
    name: name,
    phone: phone,
    email: email,
    message: message
  }

  await submitForm(data)
}

