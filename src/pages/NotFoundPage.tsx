import { Link } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";

export function NotFoundPage() {
  return (
    <PageLayout>
      <main id="main-content" className="page-main" tabIndex={-1}>
        <h1>Page not found</h1>
        <p>The page you requested does not exist.</p>
        <p>
          <Link to="/">Return home</Link>
        </p>
      </main>
    </PageLayout>
  );
}
