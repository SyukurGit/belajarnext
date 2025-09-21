"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Memuat...</div>;
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        {session ? (
          <>
            <h1>Selamat Datang, {session.user.name || session.user.email}</h1>
            <p>Anda berhasil login!</p>
            <button
              onClick={() => signOut()}
              className="rounded-full bg-red-500 text-white font-medium h-12 px-5"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h1>Anda Belum Login</h1>
            <p>Silakan login untuk melanjutkan.</p>
            <button
              onClick={() => signIn("keycloak")}
              className="rounded-full bg-blue-500 text-white font-medium h-12 px-5"
            >
              Login dengan Keycloak
            </button>
          </>
        )}
      </main>
    </div>
  );
}