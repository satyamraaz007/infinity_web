import { ApplicationsHero } from '@/components/applications/ApplicationsHero';
import { ApplicationDetails } from '@/components/applications/ApplicationDetails';
import { ApplicationGrid } from '@/components/applications/ApplicationGrid';
import { ContactCTA } from '@/components/home/ContactCTA';
import { Container } from '@/components/common/Container';
export function ApplicationsPage() { return <><ApplicationsHero /><ApplicationDetails /><section className="bg-paper py-20"><Container><ApplicationGrid /></Container></section><ContactCTA /></>; }
