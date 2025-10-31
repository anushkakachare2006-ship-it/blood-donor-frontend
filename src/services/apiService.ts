// src/services/apiService.ts
export interface DonorRegistrationData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  lastDonation?: string;
  medicalConditions?: string;
  emergencyContact: string;
  emergencyPhone: string;
  agreeTerms: boolean;
  agreeNotifications: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

// Change this to your live backend URL
const BASE_URL = "https://blood-donor-backend-pnc7.onrender.com"; // add /api if your routes are prefixed

export const apiService = {
  // Health check
  async healthCheck(): Promise<ApiResponse> {
    const res = await fetch(`${BASE_URL}/health`);
    return res.json();
  },

  // Register donor
  async registerDonor(donorData: DonorRegistrationData): Promise<ApiResponse> {
    const res = await fetch(`${BASE_URL}/donors/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(donorData),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Server error: ${res.status} ${text}`);
    }

    return res.json();
  },

  // Get all donors
  async getDonors(): Promise<ApiResponse> {
    const res = await fetch(`${BASE_URL}/donors`);
    return res.json();
  },

  // Submit a blood request
  async submitBloodRequest(requestData: any): Promise<ApiResponse> {
    const res = await fetch(`${BASE_URL}/requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });

    return res.json();
  },

  // Get blood requests
  async getBloodRequests(): Promise<ApiResponse> {
    const res = await fetch(`${BASE_URL}/requests`);
    return res.json();
  },
};
