import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../app/components/Loader";

function Login({ providers }) {
  const { data: session, status } = useSession();
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const router = useRouter();

  async function handleLogin(providerId) {
    setIsLoggingIn(true);

    try {
      await signIn(providerId, {callbackUrl: "/"});
    } catch (error) {
      setIsLoggingIn(false);
      console.error(error);
    }
  }

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

 if (status === "loading" || isLoggingIn || session) {
    return <Loader />;
  }

  return (
    <div className="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
      <Head>
        <title>Login - Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        alt="Spotify Logo"
        src="/spotify-logo.svg"
        height={250}
        width={600}
        style={{ objectFit: 'contain' }} 
        className="animate-pulse"
        loading="eager"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]"
            onClick={() => handleLogin(provider.id)}
          >
            Log in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}