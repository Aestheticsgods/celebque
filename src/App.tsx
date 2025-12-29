import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { MainLayout } from "@/components/layout/MainLayout";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import BecomeCreator from "./pages/BecomeCreator";
import CreatorDashboard from "./pages/CreatorDashboard";
import CreatePost from "./pages/CreatePost";
import CreatorProfile from "./pages/CreatorProfile";
import Discover from "./pages/Discover";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Subscriptions from "./pages/Subscriptions";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";
import Promotions from "./pages/Promotions";
import WhatsNew from "./pages/WhatsNew";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <SidebarProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Payment Result Routes */}
              <Route path="/success" element={<PaymentSuccess />} />
              <Route path="/cancel" element={<PaymentCancel />} />
              
              {/* Main App Routes with Layout */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/become-creator" element={<BecomeCreator />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/promotions" element={<Promotions />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/whats-new" element={<WhatsNew />} />
                <Route path="/creators/:id" element={<CreatorProfile />} />
                <Route path="/creator/dashboard" element={<CreatorDashboard />} />
                <Route path="/creator/posts/new" element={<CreatePost />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SidebarProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
