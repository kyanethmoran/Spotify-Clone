import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const isMoble = false;

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <ResizablePanelGroup direction="horizontal">
        {/* left side component */}
        <ResizablePanel
          defaultSize={20}
          minSize={isMoble ? 0 : 10}
          maxSize={30}
        >
          left side component
        </ResizablePanel>
        <ResizableHandle />
        {/* main component */}
        <ResizablePanel maxSize={80}>
          <Outlet />
        </ResizablePanel>
        <ResizableHandle />
        {/* right side component */}
        <ResizablePanel
          defaultSize={20}
          minSize={isMoble ? 0 : 10}
          maxSize={30}
        >
          right side component
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default MainLayout;
