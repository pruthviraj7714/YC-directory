import { auth, signIn, signOut } from "@/auth"
import Image from "next/image";
import Link from "next/link";

export async function Navbar() {
    const session = await auth();

  return (
    <header className="px-6 py-3 bg-white font-sans">
        <nav className="flex justify-between items-center">
            <Link href={'/'}>
                <Image src={'/logo.png'} alt="Logo" width={144} height={30}  />
            </Link>
            <div className="flex items-center gap-5 text-black">
                    {session && session.user ? (
                        <div>
                        <form action={async () => {
                            "use server";
                            await signOut()
                        }}>
                            <button type="submit">Logout</button>
                        </form>
                    </div>
                    ) : (
                        <div>
                            <form action={async () => {
                                "use server";
                                await signIn('github')
                            }}>
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    )}
            </div>
        </nav>
    </header>
  )
}
