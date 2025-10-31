// Mock API service for frontend-only deployment
// This simulates backend functionality without requiring a server

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

export interface BloodRequestData {
  patientName: string;
  patientAge: number;
  bloodGroup: string;
  unitsNeeded: number;
  urgencyLevel: string;
  hospital: string;
  hospitalAddress?: string;
  contactPerson: string;
  contactPhone: string;
  alternatePhone?: string;
  requiredDate: string;
  medicalCondition?: string;
  additionalNotes?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

class ApiService {
  private donors: DonorRegistrationData[] = [];
  private bloodRequests: BloodRequestData[] = [];

  constructor() {
    // Load data from localStorage on initialization
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const storedDonors = localStorage.getItem('bloodconnect_donors');
      const storedRequests = localStorage.getItem('bloodconnect_requests');
      
      if (storedDonors) {
        this.donors = JSON.parse(storedDonors);
      }
      
      if (storedRequests) {
        this.bloodRequests = JSON.parse(storedRequests);
      }
    } catch (error) {
      console.error('Error loading data from storage:', error);
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem('bloodconnect_donors', JSON.stringify(this.donors));
      localStorage.setItem('bloodconnect_requests', JSON.stringify(this.bloodRequests));
    } catch (error) {
      console.error('Error saving data to storage:', error);
    }
  }

  private async simulateNetworkDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
  }

  // Health check
  async healthCheck(): Promise<ApiResponse> {
    await this.simulateNetworkDelay();
    return {
      success: true,
      message: 'BloodConnect Frontend Service is running',
      data: {
        status: 'OK',
        timestamp: new Date().toISOString(),
        donors: this.donors.length,
        requests: this.bloodRequests.length
      }
    };
  }

  // Donor registration
  async registerDonor(donorData: DonorRegistrationData): Promise<ApiResponse> {
    await this.simulateNetworkDelay();
    
    try {
      // Check if email already exists
      const existingDonor = this.donors.find(donor => donor.email === donorData.email);
      if (existingDonor) {
        return {
          success: false,
          message: 'Email already registered. Please use a different email address.'
        };
      }

      // Validate required fields
      const requiredFields = ['fullName', 'email', 'phone', 'dateOfBirth', 'gender', 'bloodGroup', 'address', 'city', 'state', 'pincode', 'emergencyContact', 'emergencyPhone'];
      for (const field of requiredFields) {
        if (!donorData[field as keyof DonorRegistrationData]) {
          return {
            success: false,
            message: `${field} is required`
          };
        }
      }

      // Add donor to storage
      const newDonor = {
        ...donorData,
        registrationDate: new Date().toISOString(),
        id: Date.now().toString()
      };

      this.donors.push(newDonor);
      this.saveToStorage();

      return {
        success: true,
        message: 'Registration successful! Thank you for becoming a blood donor. We will contact you when blood matching your type is needed.',
        data: { donorId: newDonor.id }
      };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        message: 'Registration failed. Please try again.'
      };
    }
  }

  // Get all donors
  async getDonors(filters?: {
    bloodGroup?: string;
    city?: string;
    state?: string;
  }): Promise<ApiResponse> {
    await this.simulateNetworkDelay();

    try {
      let filteredDonors = [...this.donors];

      if (filters?.bloodGroup) {
        filteredDonors = filteredDonors.filter(donor => donor.bloodGroup === filters.bloodGroup);
      }
      
      if (filters?.city) {
        filteredDonors = filteredDonors.filter(donor => donor.city.toLowerCase() === filters.city!.toLowerCase());
      }
      
      if (filters?.state) {
        filteredDonors = filteredDonors.filter(donor => donor.state.toLowerCase() === filters.state!.toLowerCase());
      }

      // Remove sensitive information
      const safeDonors = filteredDonors.map(donor => ({
        id: (donor as any).id,
        fullName: donor.fullName,
        bloodGroup: donor.bloodGroup,
        city: donor.city,
        state: donor.state,
        registrationDate: (donor as any).registrationDate
      }));

      return {
        success: true,
        message: 'Donors retrieved successfully',
        data: {
          donors: safeDonors,
          count: safeDonors.length
        }
      };
    } catch (error) {
      console.error('Error fetching donors:', error);
      return {
        success: false,
        message: 'Failed to fetch donors'
      };
    }
  }

  // Get donors by blood group
  async getDonorsByBloodGroup(
    bloodGroup: string,
    filters?: { city?: string; state?: string }
  ): Promise<ApiResponse> {
    await this.simulateNetworkDelay();

    try {
      let matchingDonors = this.donors.filter(donor => donor.bloodGroup === bloodGroup);

      if (filters?.city) {
        matchingDonors = matchingDonors.filter(donor => donor.city.toLowerCase() === filters.city!.toLowerCase());
      }
      
      if (filters?.state) {
        matchingDonors = matchingDonors.filter(donor => donor.state.toLowerCase() === filters.state!.toLowerCase());
      }

      // Return contact information for matching donors
      const donorContacts = matchingDonors.map(donor => ({
        fullName: donor.fullName,
        email: donor.email,
        phone: donor.phone,
        city: donor.city,
        state: donor.state
      }));

      return {
        success: true,
        message: 'Matching donors found',
        data: {
          donors: donorContacts,
          count: donorContacts.length
        }
      };
    } catch (error) {
      console.error('Error fetching donors by blood group:', error);
      return {
        success: false,
        message: 'Failed to fetch matching donors'
      };
    }
  }

  // Submit blood request
  async submitBloodRequest(requestData: BloodRequestData): Promise<ApiResponse> {
    await this.simulateNetworkDelay();

    try {
      // Validate required fields
      const requiredFields = ['patientName', 'patientAge', 'bloodGroup', 'unitsNeeded', 'urgencyLevel', 'hospital', 'contactPerson', 'contactPhone', 'requiredDate'];
      for (const field of requiredFields) {
        if (!requestData[field as keyof BloodRequestData]) {
          return {
            success: false,
            message: `${field} is required`
          };
        }
      }

      // Add request to storage
      const newRequest = {
        ...requestData,
        requestDate: new Date().toISOString(),
        id: Date.now().toString(),
        status: 'active'
      };

      this.bloodRequests.push(newRequest);
      this.saveToStorage();

      // Find matching donors
      const matchingDonors = await this.getDonorsByBloodGroup(requestData.bloodGroup);
      
      return {
        success: true,
        message: `Blood request submitted successfully! Found ${matchingDonors.data?.count || 0} potential donors. We are notifying them about your request.`,
        data: { 
          requestId: newRequest.id,
          matchingDonors: matchingDonors.data?.count || 0
        }
      };
    } catch (error) {
      console.error('Blood request error:', error);
      return {
        success: false,
        message: 'Failed to submit blood request. Please try again.'
      };
    }
  }

  // Get blood requests
  async getBloodRequests(filters?: {
    status?: string;
    bloodGroup?: string;
    urgencyLevel?: string;
  }): Promise<ApiResponse> {
    await this.simulateNetworkDelay();

    try {
      let filteredRequests = [...this.bloodRequests];

      if (filters?.status) {
        filteredRequests = filteredRequests.filter(request => (request as any).status === filters.status);
      }
      
      if (filters?.bloodGroup) {
        filteredRequests = filteredRequests.filter(request => request.bloodGroup === filters.bloodGroup);
      }
      
      if (filters?.urgencyLevel) {
        filteredRequests = filteredRequests.filter(request => request.urgencyLevel === filters.urgencyLevel);
      }

      return {
        success: true,
        message: 'Blood requests retrieved successfully',
        data: {
          requests: filteredRequests,
          count: filteredRequests.length
        }
      };
    } catch (error) {
      console.error('Error fetching blood requests:', error);
      return {
        success: false,
        message: 'Failed to fetch blood requests'
      };
    }
  }

  // Get donor statistics
  async getDonorStats(): Promise<ApiResponse> {
    await this.simulateNetworkDelay();

    try {
      const total = this.donors.length;
      
      // Group by blood group
      const byBloodGroup = this.donors.reduce((acc, donor) => {
        acc[donor.bloodGroup] = (acc[donor.bloodGroup] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Group by city
      const byCity = this.donors.reduce((acc, donor) => {
        acc[donor.city] = (acc[donor.city] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Recent registrations (last 30 days)
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const recent = this.donors.filter(donor => {
        const regDate = new Date((donor as any).registrationDate || Date.now());
        return regDate >= thirtyDaysAgo;
      }).length;

      const stats = {
        total,
        byBloodGroup: Object.entries(byBloodGroup).map(([bloodGroup, count]) => ({ bloodGroup, count })),
        byCity: Object.entries(byCity).map(([city, count]) => ({ city, count })).slice(0, 10),
        recent
      };

      return {
        success: true,
        message: 'Statistics retrieved successfully',
        data: { stats }
      };
    } catch (error) {
      console.error('Error fetching statistics:', error);
      return {
        success: false,
        message: 'Failed to fetch statistics'
      };
    }
  }
}

export const apiService = new ApiService();