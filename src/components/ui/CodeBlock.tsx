import { useCallback, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useDocumentTheme } from "../../hooks/useDocumentTheme";

type CodeBlockProps = {
  code: string;
  language: string;
};

export function CodeBlock({ code, language }: CodeBlockProps) {
  const docTheme = useDocumentTheme();
  const [copied, setCopied] = useState(false);
  const prismStyle = docTheme === "dark" ? oneDark : oneLight;

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [code]);

  return (
    <div className="code-block">
      <div className="code-block__toolbar">
        <span className="code-block__lang">{language}</span>
        <button
          type="button"
          className="code-block__copy"
          onClick={copy}
          aria-label={copied ? "Code copied to clipboard" : "Copy code to clipboard"}
        >
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={prismStyle}
        className="code-block__pre"
        codeTagProps={{
          className: "code-block__code",
          style: { fontFamily: "var(--font-mono)" },
        }}
        PreTag="div"
      >
        {code.replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
}
