import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";

function MainLayout() {
  const isMobile = false;

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 flex h-full overflow-hidden p-2"
      >
        {/* left side component */}
        <ResizablePanel
          defaultSize={20}
          minSize={isMobile ? 0 : 10}
          maxSize={30}
        >
          <LeftSidebar />
        </ResizablePanel>
        <ResizableHandle
          withHandle
          className="w-0.5 bg-orange-700 rounded-md transition-colors"
        />
        {/* main component */}
        <ResizablePanel maxSize={80} defaultSize={isMobile ? 80 : 60}>
          <Outlet />
        </ResizablePanel>
        <ResizableHandle
          withHandle
          className="w-0.5 bg-orange-700 rounded-md transition-colors"
        />
        {/* right side component */}
        <ResizablePanel
          defaultSize={20}
          minSize={isMobile ? 0 : 10}
          maxSize={30}
          collapsedSize={0}
        >
          right side component
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default MainLayout;
