import MainMenu from "@/components/main-menu";
import MenuTitle from "@/components/menu-title";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      <div className="block md:hidden sticky top-0 left-0 bg-background border-b border-border p-4">
        <MenuTitle />
      </div>
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, Pritam!</h1>
        {children}
      </div>
    </div>
  );
}
