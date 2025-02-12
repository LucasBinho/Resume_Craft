import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./primitive";
import { ReactNode } from "react";


type ToolTipProps = {
    children: ReactNode;
    content: string | number | ReactNode
}

export const Tooltip = ({ children, content }: ToolTipProps) => {
  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={300}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>
            {content}
          </p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
};
