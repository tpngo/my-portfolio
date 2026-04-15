import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "section";
};

export function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return <Tag className={`card ${className}`.trim()}>{children}</Tag>;
}
