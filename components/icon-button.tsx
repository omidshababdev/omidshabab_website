import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type SideType = 'top' | 'bottom' | 'right' | 'left'

export default function IconButton({
     children,
     hover,
     side,
     onClick,
}: {
     children: React.ReactNode,
     hover?: string,
     side?: SideType,
     onClick: () => void,
}) {
     return (
          <div onClick={() => onClick()}>
               <TooltipProvider>
                    <Tooltip delayDuration={50}>
                         <TooltipTrigger>
                              <div className="flex p-2 h-[45px] w-[45px] backdrop-blur-xl items-center justify-center rounded-full border border-black border-opacity-5 cursor-pointer hover:bg-black hover:bg-opacity-[1%] text-black text-opacity-80">
                                   {children}
                              </div>
                         </TooltipTrigger>
                         <TooltipContent side={side} className="mb-2">
                              {hover}
                         </TooltipContent>
                    </Tooltip>
               </TooltipProvider>
          </div>
     );
}