import { signIn } from "next-auth/client";
import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import googleDocs from "../public/googleDocs.png";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image src={googleDocs} height="300" height="300" objectFit="contain" />
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Zaloguj
      </Button>
    </div>
  );
}

export default Login;
