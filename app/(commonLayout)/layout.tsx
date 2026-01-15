import { Navbar } from "@/components/layout/Navbar";

export default function CommonLaout({children}: {children : React.ReactNode}){
    return(
        <div>
              <Navbar></Navbar>
        
           {children}
        </div>
    )
}