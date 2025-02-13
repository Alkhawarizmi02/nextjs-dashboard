import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function FactoraLogo() {
  return (
    <div
      className={`${lusitana.className} flex items-center gap-2 text-white`}
    >
      <GlobeAltIcon className="h-8 w-8 rotate-12" />
      <p className="text-3xl">Factora</p>
    </div>
  );
}
