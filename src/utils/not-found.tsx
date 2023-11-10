import React, { Component } from "react";
import { Button } from "@/components/ui/button";
import "./not-found.css";

const handleClick = () => {};

function NotFound() {
  return (
    <div className="body">
      <div className="subheader">Error 404: Page Not Found!</div>
      <img
        className="main-content-image-sq"
        src="./assets/vite.svg"
        alt="./assets/vite.svg"
      />
      <h1 className="main-content-text">
        The page "{window.location.href}" does not exist! Please return to a
        valid webpage.
      </h1>

      <Button>Home Page</Button>
    </div>
  );
}

export default NotFound;
