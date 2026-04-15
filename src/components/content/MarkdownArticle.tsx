import type { HTMLAttributes, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { CodeBlock } from "../ui/CodeBlock";

/** react-markdown passes `inline` at runtime; default typings omit it. */
type MarkdownCodeProps = HTMLAttributes<HTMLElement> & {
  inline?: boolean;
  children?: ReactNode;
};

type MarkdownArticleProps = {
  markdown: string;
};

export function MarkdownArticle({ markdown }: MarkdownArticleProps) {
  const components: Components = {
    a({ href, children, ...props }) {
      const external = href?.startsWith("http");
      return (
        <a
          href={href}
          {...props}
          {...(external
            ? { rel: "noopener noreferrer", target: "_blank" }
            : {})}
        >
          {children}
          {external ? <span className="visually-hidden"> (opens in new tab)</span> : null}
        </a>
      );
    },
    code({ className, children, inline: _inline, ...props }: MarkdownCodeProps) {
      const match = /language-(\w+)/.exec(className || "");
      const code = String(children).replace(/\n$/, "");
      if (match) {
        return <CodeBlock code={code} language={match[1]} />;
      }
      return (
        <code className="inline-code" {...props}>
          {children}
        </code>
      );
    },
    pre({ children }) {
      return <>{children}</>;
    },
  };

  return (
    <article className="markdown-article">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
