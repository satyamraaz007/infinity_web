import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ApplicationsPage } from '@/pages/ApplicationsPage';
import { ResourcesPage } from '@/pages/ResourcesPage';
import { ContactPage } from '@/pages/ContactPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { CategoryPage } from '@/pages/CategoryPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:categorySlug" element={<CategoryPage />} />
                <Route path="/products/:categorySlug/:productSlug" element={<ProductDetailPage />} />
                <Route path="/applications" element={<ApplicationsPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Route>
        </Routes>
    );
}
