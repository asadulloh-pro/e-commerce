import { useSession } from "next-auth/react";

async function Login() {
  const { data: session, status } = useSession();
  return (
    <div>
      <h1 className="text-[5rem] text-black">Login with:</h1>
      <div className="flex flex-wrap gap-[3rem]">
        {status === "authenticated" && session.user?.name}
      </div>
    </div>
  );
}

export default Login;
