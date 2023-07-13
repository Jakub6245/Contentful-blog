import { PostType } from "@/types/PostType";
import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Post({ data }: { data: PostType }) {
  return (
    <div>
      {data.title}
      <Image
        src={"https:" + data.image.fields.file.url}
        width={data.image.fields.file.details.image.width}
        height={data.image.fields.file.details.image.height}
        alt="img"
      />
      <ul>
        {data.tags.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
      {data.description}
      {documentToReactComponents(data.content)}
    </div>
  );
}
