import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const isMobile = false;

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <ResizablePanelGroup direction="horizontal">
        {/* left side component */}
        <ResizablePanel
          defaultSize={20}
          minSize={isMobile ? 0 : 10}
          maxSize={30}
        >
          left side component
        </ResizablePanel>
        <ResizableHandle />
        {/* main component */}
        <ResizablePanel maxSize={80} defaultSize={isMobile ? 80 : 60}>
          <Outlet />
        </ResizablePanel>
        <ResizableHandle />
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
