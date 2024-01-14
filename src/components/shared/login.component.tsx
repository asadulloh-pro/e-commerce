"use client"
import { useCallback } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

const Login = () => {
  const onLogin = useCallback(() => {
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  }, []);
  return <Button onClick={onLogin}>Login</Button>;
};


export default Login;