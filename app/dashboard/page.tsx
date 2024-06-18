import EmployeesStats from "@/components/employees-stats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  return (
    <Tabs>
      <TabsList defaultValue="employees" className="mb-4">
        <TabsTrigger value="employees">Employee Stats</TabsTrigger>
        <TabsTrigger value="teams">Teams Stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>
      <TabsContent value="teams">teams stats view</TabsContent>
    </Tabs>
  );
}
