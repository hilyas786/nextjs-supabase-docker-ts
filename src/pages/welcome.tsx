import { ReactElement } from 'react';
import Layout from '@/components/Layout';

export default function Welcome() {
  return <div>Welcome</div>;
}

Welcome.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
