import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '@/components/common/ScrollToTop';

export function MainLayout() { return <><ScrollToTop /><Navbar /><main className="pt-[86px]"><Outlet /></main><Footer /></>; }
