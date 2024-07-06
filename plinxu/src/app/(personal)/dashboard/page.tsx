import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


export default async function Dashboard() {
    const { isAuthenticated } = getKindeServerSession();
  
    return (await isAuthenticated()) ? (
      <div>
        This page is protected - but you can view it because you are authenticated
      </div>
    ) : (
      <div>
        This page is protected, please <LoginLink>Login</LoginLink> to view it
      </div>
    );
  }