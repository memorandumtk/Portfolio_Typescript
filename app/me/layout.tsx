import SideNav from '@/app/ui/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col lg:flex-row lg:overflow-x-hidden italic">
      <div className="flex-none w-full lg:w-64">
        <SideNav />
      </div>
      <div className="grow p-12 ">{children}</div>
    </div>
  );
}