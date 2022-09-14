import Head from "next/head";
import Image from "next/image";

import seed from "../seed/biography";

export default function Contact({ heading, biography, image, email }) {
  return (
    <>
      <Head>
        <title>Tylor Loposser</title>
      </Head>

      <main className="mt-16">
        <div className="container">
          <div className="flex items-center space-x-20">
            <Image {...image} className="rounded-tl-3xl flex-none" />

            <div className="flex-1">
              <h1 className="text-3xl font-semibold">{heading}</h1>
              <div
                className="biography my-6"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: biography }}
              />
              <a
                href={`mailto:${email}`}
                className="inline-block bg-gray-600 px-10 py-4 text-white font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <style>
            {/* `jsx` lint issue? */}
            {`
              :global(.biography p + p) {
                margin-top: 0.66em;
              }
            `}
          </style>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      ...seed,
    },
  };
};
