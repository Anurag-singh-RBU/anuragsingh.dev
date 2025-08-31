import {
  BriefcaseBusinessIcon,
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  ClockFading,
  CodeXmlIcon,
  DraftingCompassIcon,
  GitCommitHorizontal,
  GraduationCapIcon,
  ScanEye,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/components/ui/collapsible";
import { Separator } from "@/components/components/ui/separator";
import { cn } from "@/components/lib/utils";

const iconMap = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon,
  education: GraduationCapIcon
};

export function WorkExperience({
  className,
  experiences
}) {
  return (
    <div className={cn("bg-background px-4", className)}>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience}/>
      ))}
    </div>
  );
}

export function ExperienceItem({
  experience
}) {
  return (
    <div className="space-y-4 py-4">
      <div className="not-prose flex items-center gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center" aria-hidden>
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={20}
              height={20}
              quality={100}
              className="rounded-full"
              unoptimized />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <h3 className="text-lg leading-snug ml-2 font-jetbrains font-bold">
          {experience.companyName}
        </h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span
              className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>
      <div
        className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}

export function ExperiencePositionItem({
  position
}) {
  const ExperienceIcon = iconMap[position.icon || "business"];

  return (
    <Collapsible defaultOpen={position.isExpanded} asChild>
      <div
        className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger className="group/experience not-prose block w-full text-left select-none">
          <div className="relative z-1 mb-1 flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-gray-400 text-muted-foreground dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code-xml size-4"
                  aria-hidden="true"
                >
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                </svg>
              </div>

              <h4 className="text-base font-semibold font-jetbrains text-balance ml-2">
                {position.title}
              </h4>
            </div>

            <div className="shrink-0 text-muted-foreground" aria-hidden>
              <ScanEye size={18}/>
            </div>
          </div>

    
          <div className="flex items-center font-bebas font-semibold text-gray-600 gap-2 pl-9 ml-6 text-xs text-muted-foreground">
            {position.employmentType && (
              <>
                <dl>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>&nbsp;{position.employmentType}</dd>
                </dl>

                <ClockFading size={14}/>
              </>
            )}

            <dl>
              <dt className="sr-only font-sans">Employment Period</dt>
              <dd>{position.employmentPeriod}</dd>
            </dl>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent
          className="w-full overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
        >
          {position.description && (
            <Prose className="pt-2 pl-0 text-justify">
              <ReactMarkdown>{position.description}</ReactMarkdown>
            </Prose>
          )}
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function Prose({
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert",
        "prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        className
      )}
      {...props} />
  );
}

function Skill({
  className,
  ...props
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground",
        className
      )}
      {...props} />
  );
} 