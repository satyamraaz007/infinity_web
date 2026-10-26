import { applications } from '@/data/applications';
import { ApplicationCard } from './ApplicationCard';
export function ApplicationGrid() { return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{applications.map(item => <ApplicationCard key={item.title} item={item} />)}</div>; }
