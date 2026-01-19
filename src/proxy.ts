import { NextRequest, NextResponse } from "next/server";

export function proxy(request:NextRequest){
    console.log('url:', request.url);
//  return NextResponse.redirect(new URL('/home', request.url))

 return NextResponse.next()
}

export const config = {
   matcher:["/about"]
}



