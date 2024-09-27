import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

interface Class {
  id: "";
  name: "";
  description: "";
  tags: [];
}

async function getClassList() {
  const result = await fetch("/data/classes.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const json = await result.json();
  return json["classes"];
}

function About() {
  const [data, setData] = useState<Class[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getClassList();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* All css attributes from index.css  */}
      <div className="page-content-holder">
        <h1>About Me</h1>
        <Separator />
        <div className="main-content-holder">
          <h2>My Story</h2>
          <p>
            Hello! My name is Robert Kilkenny, and I’m a passionate programmer
            with a love for creating various apps and websites to meet my
            personal and professional needs. Many of these projects are
            displayed <a href="https://kilkenny.dev/#/projects">here</a> for you
            to explore. Throughout my journey, I’ve gained experience in
            multiple programming languages and frameworks, from Python to C++
            and JavaScript, with a focus on frontend development. However, I’ve
            also worked on backend applications and database integration,
            particularly through my coursework.
          </p>
          <p>
            In addition to my individual projects, I am the president of DevLUp,
            a student club at the University of Florida dedicated to teaching
            game development. Our mission is to help students learn key coding
            principles such as GitHub, Object-Oriented Programming, and
            debugging, while having fun with tools like Unity and Unreal Engine.
            As its president, I aim to inspire fellow computer science students
            to pursue projects they enjoy, which I believe enhances both their
            skills and coding literacy. My leadership role and my work in
            different technical environments have taught me the value of
            teamwork, collaboration, and effective leadership.
          </p>
          <div className="object-container-horizon">
            <Link to="/projects" className="flex justify-center">
              <Button>Project List</Button>
            </Link>
            <Link to="/project/website" className="flex justify-center">
              <Button>Website Project Page</Button>
            </Link>
            <Link to="/contact-me" className="flex justify-center">
              <Button>Contact Me</Button>
            </Link>
          </div>
          <Separator className="mt-10 mb-10 bg-foreground" />
          <h2>Classes I've Taken</h2>
          <p className="main-content-text">
            A short list of classes I've taken that have improved me as a
            software developer.
          </p>
          <div className="object-container-grid space-x-5">
            {data.map((Class) => (
              <Card key={Class.id} className="grid-cell bg-accent">
                <CardTitle className="text-foreground pb-5">
                  {Class.name}
                </CardTitle>
                <Separator className="bg-foreground" />
                <CardContent className="hidden-grid-content">
                  <p className="main-content-text">{Class.description}</p>
                </CardContent>
                <CardFooter>
                  <p className="main-content-text pt-5">
                    <strong>Skills Learned:</strong> {Class.tags.join(", ")}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
