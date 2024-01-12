import SideNav from "../ui/dashboard/sidenav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className=" md:flex h-screen mx-auto ">
        <SideNav/>
        {children}
      </div>
  );
}
