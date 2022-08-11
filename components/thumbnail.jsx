import Image from "next/image";

export const Thumbnail = ({ label, image }) => (
  <article>
    <figure>
      <div className="border border-b-0 border-slate-200">
        <Image {...image} />
      </div>
      <figcaption className="bg-slate-400 p-2 text-right text-white">
        {label}
      </figcaption>
    </figure>
  </article>
);
