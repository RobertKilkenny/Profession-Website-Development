import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

function home() {
  return (
    <>
      {/* All css attributes from index.css  */}
      <div className="page-content-holder">
        <h1>Hi, I am Robert Kilkenny!</h1>
        <h2>Welcome to my Portfolio Website.</h2>
        <Separator />
        <div className="main-content-holder">
          <p>
            You can find all of my projects in{" "}
            <Link to="/projects">
              <strong>Project List</strong>
            </Link>{" "}
            or more information about me in{" "}
            <Link to="/about">
              <strong>About Me.</strong>
            </Link>{" "}
            Feel free to look around the site, and if you want to reach out to
            me or if you find a bug, you can find my contact information in{" "}
            <Link to="/contact-me">
              <strong>Contact Me.</strong>
            </Link>
          </p>
          <h2>Please keep in mind that this site is a work in progress!</h2>
          <p>
            I plan to update this site periodically. From adding new progress in
            my current projects to adding more features on the site to make it a
            better experience to use. All current features are subject to be
            altered and many of the current feature are made to give a basic
            structure to host the website.
          </p>
        </div>
      </div>
    </>
  );
}

export default home;
