import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetail() {
  return (
    <>
      <Head>
        <title>Tylor Loposser</title>
      </Head>

      <main className="mt-16">
        <div className="container">
          <div className="flex items-center space-x-20">
            <article>
              <div>
                <Link href="/">
                  <a>home</a>
                </Link>{" "}
                › name of project
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = () => {
//   return {
//     props: {
//       ...seed,
//     },
//   };
// };
