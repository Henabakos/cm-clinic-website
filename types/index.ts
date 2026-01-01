
// Fix: Import React to resolve 'Cannot find namespace React' when using React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}
