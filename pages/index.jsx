// import client, {
//   getClient,
//   usePreviewSubscription,
//   PortableText,
// } from "@lib/sanity";
import { getClient } from "@lib/sanity";
import { groq } from "next-sanity";

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
            {data.map(({ _id, ...rest }) => (
              <Thumbnail key={_id} {...rest} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const query = groq`
*[_type == "projects"] | order(_createdAt desc) {
  ...,
  categories[]->
}
`;

export const getServerSideProps = async () => {
  const projects = await getClient(false).fetch(query);

  // projects.map(project => console.log(project.poster.asset));

  return {
    props: {
      data: projects,
    },
  };
};
