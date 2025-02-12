import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label"
import { ReactNode } from "react";

type FieldWrapperProps = {
    label: string;
    children: ReactNode;
    className?: string;
}

export const FieldWrapper = ({ label, className, children }: FieldWrapperProps) => {
    return(
        <div className={cn("flex flex-col gap-2", className )}>
            <Label>{label}</Label>
            {children}
        </div>
    )
}