import { RiFileTextLine, RiPlantLine, RiGroupLine } from "react-icons/ri";
import { FaSuitcase } from "react-icons/fa";
import { OnboardingStep } from "@/lib";

interface SidebarProps {
  activeStep: OnboardingStep;
  onStepClick?: (step: OnboardingStep) => void;
}

export default function Sidebar({ activeStep, onStepClick }: SidebarProps) {
  const steps = [
    { id: "business", label: "Business Details", icon: FaSuitcase },
    { id: "documents", label: "Documents", icon: RiFileTextLine },
    { id: "photos", label: "Farmland Photos", icon: RiPlantLine },
    { id: "guarantors", label: "Guarantors", icon: RiGroupLine },
  ];

  const stepsOrder = steps.map((s) => s.id);
  const currentIndex = stepsOrder.indexOf(activeStep);

  return (
    <aside className="w-full lg:w-64 hidden md:block">
      <div className="flex flex-col gap-4 bg-white dark:bg-[#1a2e15] p-4 rounded-xl shadow-sm border border-[#eaf3e7] dark:border-[#2a3d24]">
        <div className="flex flex-col mb-4">
          <h3 className="text-[#111b0d] dark:text-white text-base font-bold leading-normal">
            Onboarding Steps
          </h3>
          <p className="text-[#5e9a4c] text-xs font-normal leading-normal uppercase tracking-wider">
            Verification Process
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-2">
          {steps.map((step, index) => {
            const isActive = activeStep === step.id;
            const isClickable = index <= currentIndex;
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200
                  ${isActive ? "bg-primary/20 border-l-4 border-primary" : "opacity-60"}
                  ${isClickable ? "cursor-pointer hover:bg-primary/10" : "cursor-not-allowed opacity-30"}
                `}
                onClick={() => {
                  if (isClickable) onStepClick?.(step.id as any);
                }}
              >
                <Icon
                  className={`text-[20px] ${
                    isActive ? "text-primary" : "text-[#111b0d] dark:text-white"
                  }`}
                />
                <p
                  className={`text-sm leading-normal ${
                    isActive
                      ? "text-[#111b0d] dark:text-white font-semibold"
                      : "text-[#111b0d] dark:text-white font-medium"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
