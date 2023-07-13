import { Document } from "@contentful/rich-text-types";

export type PostType = {
  content: Document;
  description: string;
  image: {
    fields: {
      file: {
        contentType: string;
        details: {
          size: number;
          image: { width: number; height: number };
        };
        fileName: string;
        url: string;
      };
      title: string;
    };
  };
  tags: string[];
  title: string;
};
