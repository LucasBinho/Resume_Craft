"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { InfosSideBar } from "./infos-sidebar";
import { ResumeContent } from "./resume-content";
import { StructureSideBar } from "./structure-sidebar";
import { FormProvider, useForm } from "react-hook-form";

export const ResumePage = () => {

  const defaultValues: ResumeData = {
    content: {
      image: {
        url: "",
        visible: true,
      },
      infos: {
        fullName: "",
        headline: "",
        email: "",
        website: "",
        phone: "",
        location: "",
      },
      summary: "",
      certifications: [],
      educations: [],
      experiences: [],
      languages: [],
      projects: [],
      skills: [],
      socialMedias: [
        {
          icon: "",
          name: "Social Media 1",
          url: "test 1",
          username: "test 1"
        },
        {
          icon: "",
          name: "test 2",
          url: "test 2",
          username: "ddd"
        }
      ],
    },
  }

  const methods = useForm<ResumeData>({ defaultValues });


  return (
    <FormProvider {...methods}>
      <main className="w-full h-screen overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="w-full h-full">
          <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
            <InfosSideBar />
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel>
            <ResumeContent />
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
            <StructureSideBar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </FormProvider>
  );
};
