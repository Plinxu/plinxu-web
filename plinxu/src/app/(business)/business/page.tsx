import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {redirect} from "next/navigation";


export default async function Dashboard() {
    const { isAuthenticated } = getKindeServerSession();
  
    if (!(await isAuthenticated())) {
        redirect("/api/auth/login");
      }
    
      return <div>Dashboard</div>;
  }