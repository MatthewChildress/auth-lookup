import Head from 'next/head';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Placeholder</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
