import { servicesData } from '../data/servicesData';

// Mock API service for fetching AWS services data
// Replace this with a real fetch call to a backend API later

export const getServices = async () => {
  // Check if there is an API URL in the .env, even if we are not fetching yet
  // const apiUrl = import.meta.env.VITE_API_URL;
  
  // Simulate network delay for realistic debugging
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(servicesData);
    }, 300);
  });
};
