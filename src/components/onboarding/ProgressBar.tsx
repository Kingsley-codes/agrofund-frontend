interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="bg-white dark:bg-[#1a2e15] rounded-xl shadow-sm border border-[#eaf3e7] dark:border-[#2a3d24] overflow-hidden">
      <div className="flex flex-col gap-3 p-6">
        <div className="flex gap-6 justify-between items-center">
          <p className="text-[#111b0d] dark:text-white text-lg font-bold leading-normal">
            Onboarding Progress
          </p>
          <span className="px-3 py-1 bg-primary/10 text-[#5e9a4c] text-xs font-bold rounded-full">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        <div className="rounded-full bg-[#d5e7cf] dark:bg-[#2a3d24] h-2 w-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-[#5e9a4c] text-sm font-medium leading-normal">
          Currently: Business Details & Identification
        </p>
      </div>
    </div>
  );
}
