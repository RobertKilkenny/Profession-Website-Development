import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function about() {
  return (
    <div>
      {/* All css attributes from index.css  */}
      <div className="page-content-holder">
        <h1>About Me</h1>
        <Separator />
        <div className="main-content-holder">
          <p>
            Hi, I am Robert Kilkenny, currently a student at the University of
            Florida (UF) going into my senior year. I plan to graduate in
            December of 2024 with a Bachelor's Degree in Computer Science and a
            minor in Mathematics.
          </p>
          <p>
            I run a club at UF about creating video games called "DevLUp" to
            help students learn about coding principles like using GitHub,
            Object Oriented Programming, and debugging methods. I became
            president of DevLUp at UF because I wanted to inspire more computer
            science students to work on projects that they are having fun doing,
            and creating a game with Unity or Unreal can offer a lot to students
            and improve their coding skills and literacy!
          </p>
          <p>
            My experiences running a club and working in different fields have
            taught me a lot about working as a team member and as a leader.
            Throughout my early career as a software engineer, I have worked
            with several different coding languages and code stacks, from
            developing games to creating this website that you are currently
            using! I have these projects detailed on my Project List page and
            feel free to reach out to me!
          </p>
          <div className="object-container-horizon">
            <Button>
              <Link to="/projects">Project List</Link>
            </Button>
            <Button>
              <Link to="/project/website">Website Project Page</Link>
            </Button>
            <Button>
              <Link to="/contact-me">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
