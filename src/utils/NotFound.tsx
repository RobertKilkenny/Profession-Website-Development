import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <div className="page-content-holder">
      <div className="subheader">Error 404: Page Not Found!</div>
      <img
        className="main-content-image-sq"
        src="/assets/vite.svg"
        alt="Error Image"
      />
      <a className="main-content-text">
        The page "{window.location.href}" does not exist! Please return to a
        valid webpage.
      </a>

      <Button>
        <Link to="/">Home Page</Link>
      </Button>
    </div>
  );
}

export default NotFound;
