import axios from 'axios'

export const apiConection = axios.create({
   baseURL:"http://localhost:3000"
}) 


apiConection.interceptors.request.use((config)=>{
  console.log(config)

  return
})