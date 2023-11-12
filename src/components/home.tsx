import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

function home() {
  return (
    <>
      {/* All css attributes from index.css  */}
      <div className="page-content-holder">
        <h1 className="main-header">Hi, I am Robert Kilkenny!</h1>
        <h2 className="main-subheader">
          <i>Welcome to my Portfolio Website.</i>
        </h2>
        <Separator />
        <div className="main-content-holder">
          <p className="main-content-text">
            You can find all of my projects in{" "}
            <Link to="/projects">
              <strong>Project List</strong>
            </Link>{" "}
            or more information about me in{" "}
            <Link to="/about-me">
              <strong>About Me.</strong>
            </Link>{" "}
            Feel free to look around the site, and if you want to reach out to
            me or if you find a bug, you can find my contact information in{" "}
            <Link to="/contact-me">
              <strong>Contact Me.</strong>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default home;
