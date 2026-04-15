type EmptyStateProps = {
  title: string;
  message: string;
};

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="state-message state-message--empty" role="status">
      <h2 className="state-message__title">{title}</h2>
      <p className="state-message__text">{message}</p>
    </div>
  );
}
