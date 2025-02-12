import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { CustomersSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Customers',
};

async function page(props: {
    searchParams?: Promise<{
    query?: string;
  }>;
}) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <Suspense fallback={<CustomersSkeleton />}>
      <CustomersTable query={query} />
    </Suspense>
  )
}

export default page