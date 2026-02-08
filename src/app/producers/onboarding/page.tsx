"use client";

import { useState } from "react";
import Sidebar from "@/components/onboarding/Sidebar";
import ProgressBar from "@/components/onboarding/ProgressBar";
import BusinessInfo from "@/components/onboarding/BusinessInfo";
import DocumentUpload from "@/components/onboarding/DocumentUpload";
import FarmlandPhotos from "@/components/onboarding/FarmlandPhotos";
import Guarantors from "@/components/onboarding/Guarantors";
import { ProducerFormData, Guarantor, OnboardingStep } from "@/lib/index";

export default function ProducerOnboarding() {
  const [activeStep, setActiveStep] = useState<OnboardingStep>("business");
  const [formData, setFormData] = useState<ProducerFormData>({
    businessName: "",
    nin: "",
    businessType: "",
    primaryCrop: "",
    documents: {
      ninCard: null,
      landTitle: null,
      businessReg: null,
    },
    farmlandPhotos: [],
    guarantors: [
      { id: 1, name: "", phone: "", nin: "", photo: null },
      { id: 2, name: "", phone: "", nin: "", photo: null },
    ],
  });

  const handleBusinessChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isStepValid = (step: OnboardingStep) => {
    switch (step) {
      case "business":
        return (
          formData.businessName.trim() !== "" &&
          formData.nin.trim() !== "" &&
          formData.businessType.trim() !== "" &&
          formData.primaryCrop.trim() !== ""
        );

      case "documents":
        return (
          formData.documents.ninCard !== null &&
          formData.documents.landTitle !== null &&
          formData.documents.businessReg !== null
        );

      case "photos":
        return formData.farmlandPhotos.length > 0;

      case "guarantors":
        return formData.guarantors.every(
          (g) =>
            g.name.trim() !== "" &&
            g.phone.trim() !== "" &&
            g.nin.trim() !== "" &&
            g.photo !== null,
        );

      default:
        return false;
    }
  };

  const handleDocumentUpload = (type: string, file: File) => {
    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [type]: file,
      },
    }));
  };

  const handleAddPhoto = (file: File) => {
    setFormData((prev) => ({
      ...prev,
      farmlandPhotos: [...prev.farmlandPhotos, file],
    }));
  };

  const handleRemovePhoto = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      farmlandPhotos: prev.farmlandPhotos.filter((_, i) => i !== index),
    }));
  };

  const handleGuarantorUpdate = (
    index: number,
    field: keyof Guarantor,
    value: string | File,
  ) => {
    setFormData((prev) => {
      const updatedGuarantors = [...prev.guarantors];
      updatedGuarantors[index] = {
        ...updatedGuarantors[index],
        [field]: value,
      };
      return {
        ...prev,
        guarantors: updatedGuarantors,
      };
    });
  };

  const handleSaveDraft = () => {
    localStorage.setItem("producerOnboardingDraft", JSON.stringify(formData));
    alert("Draft saved successfully!");
  };

  const steps: Array<OnboardingStep> = [
    "business",
    "documents",
    "photos",
    "guarantors",
  ];

  const handleStep = (direction: "next" | "prev") => {
    const currentIndex = steps.indexOf(activeStep);

    if (direction === "next" && currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1]);
    } else if (direction === "prev" && currentIndex > 0) {
      setActiveStep(steps[currentIndex - 1]);
    }
  };

  const stepNumber = {
    business: 1,
    documents: 2,
    photos: 3,
    guarantors: 4,
  }[activeStep];

  return (
    <div className="flex-1 justify-center py-8 px-4 sm:px-10 lg:px-40">
      <div className="layout-content-container flex flex-col max-w-300 w-full gap-8 mx-auto">
        {/* Page Heading */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap justify-between items-end gap-3 px-4">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-[#111b0d] text-4xl font-semibold tracking-[-0.033em]">
                Verify Your Producer Profile
              </h1>
              <p className="text-[#5e9a4c] text-base">
                Please provide accurate information to complete your
                professional producer verification.
              </p>
            </div>
          </div>

          <button
            onClick={handleSaveDraft}
            className="px-2 w-36 mx-1 py-2 border border-primary text-primary text-xs md:text-md rounded-lg hover:bg-primary/10 transition-colors"
          >
            Save Draft
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            activeStep={activeStep}
            onStepClick={(step) => setActiveStep(step)}
          />

          <main className="flex-1 space-y-8">
            <ProgressBar currentStep={stepNumber} totalSteps={4} />

            {activeStep === "business" && (
              <BusinessInfo
                formData={formData}
                onChange={handleBusinessChange}
              />
            )}

            {activeStep === "documents" && (
              <DocumentUpload onFileUpload={handleDocumentUpload} />
            )}

            {activeStep === "photos" && (
              <FarmlandPhotos
                photos={formData.farmlandPhotos}
                onAddPhoto={handleAddPhoto}
                onRemovePhoto={handleRemovePhoto}
              />
            )}

            {activeStep === "guarantors" && (
              <Guarantors
                guarantors={formData.guarantors}
                onUpdate={handleGuarantorUpdate}
              />
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center py-4">
              <button
                onClick={() => handleStep("prev")}
                disabled={activeStep === "business"}
                className="px-6 py-2 border border-primary text-md text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Previous Step
              </button>
              <div className="flex gap-4">
                <button
                  onClick={() => handleStep("next")}
                  disabled={
                    activeStep === "guarantors" || !isStepValid(activeStep)
                  }
                  className={`px-8 py-3 font-semibold rounded-lg shadow-lg shadow-primary/20 ${
                    !isStepValid(activeStep)
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-primary text-[#142210] hover:brightness-110"
                  }`}
                >
                  Next Step
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
