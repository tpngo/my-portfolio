type ErrorStateProps = {
  title: string;
  message: string;
  onRetry?: () => void;
};

export function ErrorState({ title, message, onRetry }: ErrorStateProps) {
  return (
    <div className="state-message state-message--error" role="alert">
      <h2 className="state-message__title">{title}</h2>
      <p className="state-message__text">{message}</p>
      {onRetry ? (
        <button type="button" className="btn btn--secondary state-message__retry" onClick={onRetry}>
          Try again
        </button>
      ) : null}
    </div>
  );
}
