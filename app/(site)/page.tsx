import Image from "next/image";
import Auth from "./Components/Auth/Authform";


export default function Home() {
  return (
    <div className="flex min-h-full h-screen flex-col justify-center items-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          width={48}
          height={48}
          className="mx-auto"
          src={"/images/logo.png"}
        />
        <h2 className='mt-6 text-center text-3xl tracking-tighter text-gray-600'>
          Sign in to your account
        </h2>
      </div>
      <Auth />
    </div>
  );
}
