import { Link } from "react-router-dom";

function NotFound(): JSX.Element {
  return (
    <>
      <p>404 Error</p>
      <p>Page not found</p>
      <Link to="/">На главную</Link>
    </>
  );
}

export default NotFound;
