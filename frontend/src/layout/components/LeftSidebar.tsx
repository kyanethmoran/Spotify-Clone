import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HomeIcon, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="h-full flex flex-col gap-2">
      {/* nav menu */}
      <div className="rounded-lg bg-zinc-900 p-4">
        <div className="space-y-2">
          <Link
            to={"/"}
            // this alows the use of chadcn buttons formatting on the homeicon and text
            className={cn(
              buttonVariants({
                variant: "ghost",
                className:
                  "w-full justify-start text-white hover:bg-orange-900",
              }),
            )}
          >
            <HomeIcon className="mr-2 size-5" />
            <span className="hidden md:inline">Home</span>
          </Link>

          <Link
            to={"/chat"}
            className={cn(
              buttonVariants({
                variant: "ghost",
                className:
                  "w-full justify-start text-white hover:bg-orange-900",
              }),
            )}
          >
            <MessageSquare className="mr-2 size-5" />
            <span className="hidden md:inline">Messages</span>
          </Link>
        </div>
      </div>
      {/* lib section */}
      <div className="rounded-lg bg-zinc-900 p-4">
        <div className="space-y-2">library bar</div>
      </div>
    </div>
  );
};

export default LeftSidebar;
