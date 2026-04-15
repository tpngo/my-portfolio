import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    as?: "button";
    to?: never;
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> & {
    as: "link";
    to: string;
  };

type ButtonAsExternal = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    as: "a";
    href: string;
  };

export type AppButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsExternal;

export function Button(props: AppButtonProps) {
  const { variant = "primary", className = "" } = props;
  const cls = `btn btn--${variant} ${className}`.trim();

  if (props.as === "link") {
    const { as, to, children: c, variant: v, className: cn, ...rest } = props;
    return (
      <Link to={to} className={cls} {...rest}>
        {c}
      </Link>
    );
  }

  if (props.as === "a") {
    const { as, href, children: c, variant: v, className: cn, ...rest } = props;
    return (
      <a href={href} className={cls} {...rest}>
        {c}
      </a>
    );
  }

  const {
    children: c,
    variant: v,
    className: cn,
    as: _a,
    type = "button",
    ...rest
  } = props as ButtonAsButton;
  return (
    <button type={type} className={cls} {...rest}>
      {c}
    </button>
  );
}
