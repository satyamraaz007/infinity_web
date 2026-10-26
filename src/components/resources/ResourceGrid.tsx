import { resources } from '@/data/resources';
import { ResourceCard } from './ResourceCard';
export function ResourceGrid() { return <div className="grid gap-5 md:grid-cols-2">{resources.map(item => <ResourceCard key={item.title} item={item} />)}</div>; }
