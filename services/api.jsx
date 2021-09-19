import axios from 'axios'

export const apiConection = axios.create({
   baseURL:"https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register"
}) 


apiConection.interceptors.request.use((config)=>{
  console.log(config)

  return
})