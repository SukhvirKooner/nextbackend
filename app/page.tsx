
import axios from "axios";

async function getUserDetails() {
  // await new Promise((r)=>{setTimeout(r,5000)})
  const response = await axios.get("http://localhost:3000/api/user")

	return response.data;
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
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
  );
}
