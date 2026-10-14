"use client" 
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "./components/Loader";
import Dashboard from "./components/Dashboard";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="">
      <Head>
        <title>Spotify - Dashboard</title>
      </Head>
      <Dashboard />
    </div>
  );
}
