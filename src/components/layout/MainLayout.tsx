import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppSidebar } from './AppSidebar';
import { MobileNav } from './MobileNav';
import { SuggestedCreators } from './SuggestedCreators';
import { useSidebarContext } from '@/contexts/SidebarContext';

export function MainLayout() {
  const { isCollapsed } = useSidebarContext();

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <AppSidebar />
      </div>

      {/* Main Content */}
      <main
        style={{
          marginLeft: typeof window !== 'undefined' && window.innerWidth >= 1024 
            ? (isCollapsed ? 72 : 260) 
            : 0,
          marginRight: typeof window !== 'undefined' && window.innerWidth >= 1280 ? 320 : 0,
        }}
        className="min-h-screen transition-all duration-300 lg:ml-[260px] xl:mr-80 pb-20 lg:pb-0"
      >
        <Outlet />
      </main>

      {/* Desktop Right Sidebar */}
      <SuggestedCreators />

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
}
