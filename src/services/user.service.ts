import { cookies } from "next/headers";

export const userService = {
    getSession: async function (){
      try{
      const cookieStore = await cookies()
  
 const res = await fetch(`${process.env.AUTH_URL}/get-session`, {
  headers:{
    Cookie:  cookieStore.toString(),
  },
  cache:"no-store"
 })

 const session = await res.json()

 console.log('session-data',session);

 if(!session===null){
    return {data:null, error:{message:"session is missing"}}
 }


 return {data:session, error:null}
}

      catch(err){
      console.error(err)
      return {data:null, error:{message:"something went wrong"}}
      }

    }
}