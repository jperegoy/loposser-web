import Image from "next/image";

export const Thumbnail = ({ title, poster }) => {
  // const { alt, _ref } = poster;

  return (
    <article>
      <figure>
        <div className="border border-b-0 border-slate-200">
          {/* <Image src={_ref} /> */}
        </div>
        <figcaption className="bg-slate-400 p-2 text-right text-white">
          {title}
        </figcaption>
      </figure>
    </article>
  );
};
