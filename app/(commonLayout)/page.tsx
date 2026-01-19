import { Button } from "@/src/components/ui/button";
import { userService } from "@/src/services/user.service";


export default async function Home() {

  const {data, error} =  await userService.getSession()
  console.log('data::',data);
  
  return (
    <div>
      <Button>click here</Button>
    </div>
  );
}
