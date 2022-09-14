import Head from "next/head";

import seed from "../seed/resume";

const Label = ({ children }) => (
  <h2 className="mb-5 border-b border-gray-400 pb-4 text-sm tracking-wide text-gray-700 uppercase font-semibold">
    {children}
  </h2>
);

export default function Contact({
  education,
  proficiencies,
  interests,
  experience,
}) {
  return (
    <>
      <Head>
        <title>Tylor Loposser | Resumé</title>
      </Head>

      <main className="mt-16">
        <div className="container">
          <div className="flex space-x-20">
            <aside className="w-1/3">
              <Label>EDUCATION</Label>
              <ul>
                {education.map(({ degree, discipline, school, years }, i) => (
                  <li className="mb-6">
                    <h3 className="text-2xl font-semibold">{degree}</h3>
                    <h4 className="text-sm font-semibold">{discipline}</h4>
                    <div className="mt-4 text-sm text-gray-800">
                      <p>{school}</p>
                      <p>{years}</p>
                    </div>
                    {i !== education.length - 1 && (
                      <hr className="w-1/3 my-8 border-gray-400" />
                    )}
                  </li>
                ))}
              </ul>

              <div className="my-16">
                <Label>Proficiencies</Label>
                <ul>
                  {proficiencies.map(item => (
                    <li className="text-sm">{item}</li>
                  ))}
                </ul>
              </div>

              <Label>Interests</Label>
              <ul>
                {interests.map(item => (
                  <li className="text-sm">{item}</li>
                ))}
              </ul>
            </aside>

            <div>
              <Label>Work Experience</Label>
              <ul>
                {experience.map(
                  ({ title, company, years, abstract, highlights }, i) => (
                    <li className={i !== experience.length - 1 ? "mb-6" : null}>
                      <div className="flex justify-between items-end">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="text-sm font-semibold">
                          {company} | {years}
                        </p>
                      </div>
                      <div
                        className="my-5"
                        dangerouslySetInnerHTML={{ __html: abstract }}
                      />
                      {highlights && (
                        <ul className="list-disc list-inside">
                          {highlights.map(highlight => (
                            <li>{highlight}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <style>
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
