import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ApplicationsPage } from '@/pages/ApplicationsPage';
import { ResourcesPage } from '@/pages/ResourcesPage';
import { ContactPage } from '@/pages/ContactPage';
export function AppRoutes() { return <Routes><Route element={<MainLayout />}><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/applications" element={<ApplicationsPage />} /><Route path="/resources" element={<ResourcesPage />} /><Route path="/contact" element={<ContactPage />} /></Route></Routes>; }
