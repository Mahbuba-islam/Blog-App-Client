import { NextRequest, NextResponse } from "next/server";
import { userService } from "./src/services/user.service";
import { Roles } from "./src/constants/roles";

export async function proxy(request:NextRequest){
  
    const pathName = request.nextUrl.pathname


    let isAuthenticated = false
    let isAdmin = false
    console.log('session.........,', userService.getSession());
    const {data} = await userService.getSession()
   console.log('data',data);
    if(data){
        isAuthenticated = true
        
        isAdmin = data.user.role === Roles.admin
    }


    if(!isAuthenticated){
        return NextResponse.redirect(new URL("/login", request.url))
    }


    if(isAdmin && pathName.startsWith("/userdashboard")){
        return NextResponse.redirect(new URL("/adminDashboard", request.url))
    }

    if(!isAdmin && pathName.startsWith("/adminDashboard")){
        return NextResponse.redirect(new URL("/userdashboard", request.url))
    }


 return NextResponse.next()
}

export const config = {
   matcher:["/dashboard",
  "/userdashboard/:path*",
  "/adminDashboard/:path*"
]
}



