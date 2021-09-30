import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { Head } from 'widgets/metadata/head';

const Home: NextPage = () => {
  const { pathname } = useRouter();
  return (
    <div>
      <Head pathname={pathname} title="Home" description="Home Description" />
    </div>
  );
};

export default Home;
