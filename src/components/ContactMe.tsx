import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import MessageContainer from "@/utils/MessageContainer";

interface Social {
  id: "";
  image_location: "";
  link: "";
}

async function getSocialList() {
  const result = await fetch("/data/social.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const json = await result.json();
  return json["social"];
}

export default function ContactMe() {
  const [data, setData] = useState<Social[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSocialList();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Most of the css styling here is from index.css
  // Added a little Tailwind CSS to make the images interact like I want them to
  return (
    <div className="page-content-holder">
      <h1>Have Something to Say?</h1>
      <Separator />
      <div className="main-content-holder">
        <p className="main-content-text">
          You can find me here on my different pages
        </p>

        <div className="object-container-horizon">
          {data.map((social) => (
            <Link to={social.link} key={social.id}>
              <img
                className="secondary-content-image-sq"
                src={social.image_location}
                color="accent"
                alt="Social Image"
              />
            </Link>
          ))}
        </div>
        <p className="main-content-text">
          Feel free to connect with me on{" "}
          <Link to="https://www.linkedin.com/in/robert-kilkenny3/">
            <strong>LinkedIn</strong>
          </Link>{" "}
          or you can email me at <strong>robert.kilkenny7@gmail.com</strong>
        </p>
      </div>
      <MessageContainer />
    </div>
  );
}
