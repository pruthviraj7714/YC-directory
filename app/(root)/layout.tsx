import { Navbar } from "@/components/Navbar";

export default function Layout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
