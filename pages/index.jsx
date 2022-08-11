import Head from "next/head";

import seed from "../seed/examples";

import { Thumbnail } from "../components/thumbnail";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Tylor Loposser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-16">
        <div className="container">
          <div className="flex space-x-16">
            {data.map(item => (
              <Thumbnail key={item.id} {...item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      data: seed,
    },
  };
};
