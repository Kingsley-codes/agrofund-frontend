export interface Opportunity {
  id: string;
  title: string;
  produceName: string;
  duration: string;
  roi: number;
  unitPrice: number;
  minInvestment: number;
  fundedPercentage: number;
  category: "Crop Farm" | "Livestock";
  unitsLeft: number;
  imageUrl: string;
  imageAlt: string;
  icon?: string;
}

export interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Logo {
  icon: string;
  name: string;
}

// API response type
export interface ApiProduce {
  _id: string;
  produceName: string;
  title: string;
  description: string;
  totalUnit: number;
  minimumUnit: number;
  price: number;
  category: string;
  duration: string;
  ROI: number;
  remainingUnit: number;
  remainingPercentage: number;
  image1: {
    url: string;
    publicId: string;
  };
  image1Alt: string;
  image2: {
    url: string;
    publicId: string;
  };
  image2Alt: string;
  image3: {
    url: string;
    publicId: string;
  };
  image3Alt: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ApiResponse {
  success: boolean;
  count: number;
  produce: ApiProduce[];
}

export interface ProducerFormData {
  businessName: string;
  nin: string;
  businessType: string;
  primaryCrop: string;
  documents: {
    ninCard: File | null;
    landTitle: File | null;
    businessReg: File | null;
  };
  farmlandPhotos: File[];
  guarantors: Guarantor[];
}

export interface Guarantor {
  id: number;
  name: string;
  phone: string;
  nin: string;
  photo: File | null;
}

export type OnboardingStep = "business" | "documents" | "photos" | "guarantors";
