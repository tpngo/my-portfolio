type TagListProps = {
  tags: string[];
  labelledBy?: string;
  className?: string;
};

export function TagList({ tags, labelledBy, className = "" }: TagListProps) {
  if (tags.length === 0) return null;
  return (
    <ul
      className={`tag-list ${className}`.trim()}
      {...(labelledBy ? { "aria-labelledby": labelledBy } : { "aria-label": "Tags" })}
    >
      {tags.map((tag) => (
        <li key={tag} className="tag-list__item">
          {tag}
        </li>
      ))}
    </ul>
  );
}
