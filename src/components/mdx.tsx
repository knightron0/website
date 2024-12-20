import React from "react";
import * as runtime from "react/jsx-runtime";

import { cn } from "~/lib/utils";

import "katex/dist/katex.min.css";
import { CircleAlert, Github, Info, OctagonX, Terminal } from "lucide-react";

interface MdxProps {
  code: string;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

/* eslint-disable react/display-name */
function createHeading(level: number) {
  return ({ children }: { children: React.ReactNode }) => {
    let slug = slugify(children?.toString() || "");
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };
}

function YouTube({
  id,
  title,
  width = "100%",
  height = "400px",
}: {
  id: string;
  title: string;
  width?: string;
  height?: string;
}) {
  const src = `https://www.youtube.com/embed/${id}`;
  return (
    <div className="youtube-container my-5">
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  type?: string;
}) {

  return (
    <div
      className={cn(
        "my-6 flex items-start rounded-md border border-l-4 p-4 text-base",      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  YouTube,
  Callout,
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
