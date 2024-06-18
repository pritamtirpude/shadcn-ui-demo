import MainMenu from "@/components/main-menu";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <MainMenu />
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, Pritam!</h1>
        {children}
      </div>
    </div>
  );
}
