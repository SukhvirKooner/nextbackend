
import axios from "axios";


import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
async function getUserDetails() {
  // await new Promise((r)=>{setTimeout(r,5000)})

  const response:any = await client.user.findFirst({});


	return response;
}
// data fetching in nextjs
// async component only in server component 
// bcz this is a server component , this component gets server side rendered 
export default async function Home() {
  const userData = await getUserDetails();
  

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Username: {userData?.username}
                </div>
                
                password:{userData?.password}
            </div>
        </div>
    </div>
  );
}
