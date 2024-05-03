
import { Button  } from "@/components/ui/button"
import { Stylish } from "next/font/google"
export default function home(){
  return (

    <div className="p-5 space-y-5 flex flex-col max-w-[200px]">
      <Button variant={"default"}>Default</Button>
      <Button variant={"classic"}>Classic</Button>
      <Button variant={"stylish"}>Stylish</Button>
      <Button variant={"secondary"}>Secondary</Button>   
    </div>
  )
}