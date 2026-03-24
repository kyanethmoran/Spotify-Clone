import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HomeIcon, Library, MessageSquare } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  // loading state for when we dynamically populate playlists
  const isLoading = true;
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
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-white px-2">
            <Library className="size-5 mr-2" />
            <span className="hidden md:inline">Playlists</span>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-300px)] w-full rounded-md">
          <div className="space-y-2">
            {/* show user playlists here dynamically */}
            <p>album 1</p>
            <p>album 2</p>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default LeftSidebar;
