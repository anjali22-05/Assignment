const Index = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
          <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
        </div>
      </div>
    );
  };
  
  export default Index;
  
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "../components/Layout";
// import Dashboard from "./Dashboard";
// import Documents from "./Documents";
// import Transaction from "./Transaction";
// import Task from "./Task";
// import Store from "./Store";
// import Notification from "./Notification";
// import Settings from "./Setting";
// import NotFound from "./NotFound";

// const queryClient = new QueryClient();

// const index = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/documents" element={<Documents />} />
//             <Route path="/transaction" element={<Transaction />} />
//             <Route path="/task" element={<Task />} />
//             <Route path="/store" element={<Store />} />
//             <Route path="/notification" element={<Notification />} />
//             <Route path="/settings" element={<Settings />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Layout>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default index;
