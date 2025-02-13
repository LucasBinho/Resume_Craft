import { Separator } from "@radix-ui/react-separator"
import { TemplatesListSection } from "./sections/templates-list"
import { LayoutSection } from "./sections/layout"


export const StructureSideBar = () => {
    
    return (
        <aside className="w-full h-full p-6 overflow-y-auto">
            <TemplatesListSection/>
            <Separator className="my-5"/>
            <LayoutSection/>
        </aside>
    )
}