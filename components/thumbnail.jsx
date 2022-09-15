import Image from "next/image";

export const Thumbnail = ({ title, poster }) => {
  return (
    <article>
      <figure>
        <div className="border border-b-0 border-slate-200">
          <Image {...poster} width={380} height={380} layout="intrinsic" />
        </div>
        <figcaption className="bg-slate-400 p-2 text-right text-white">
          {title}
        </figcaption>
      </figure>
    </article>
  );
};
