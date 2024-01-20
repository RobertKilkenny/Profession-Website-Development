# Background

For years, I had used an Excel spreadsheet to track my classes and current plans for each semester. It was originally a document that the Wertheim College of Engineering at the University of Florida gave me, but I found it too simple to be useful. As such, I made many revisions to it over the years, to the point that barely any part of the original document remains. While it was an excellent opportunity to learn the advanced features of Excel (like XLOOKUP), iterating on the document has become more and more tedious. I had planned on making a program for this several different times but up until now had just dealt with using the somewhat jury-rigged spreadsheet due to the amount of time I had spent working on it.

# Project Specifics

In prior classes, I worked with Pyside2 and matplotlib, so this seemed like an obvious choice for the front end of this application. While I had considered curses (as I also have worked with them in the past) since I have worked with the curses library before, I didn't want to use it again. I also saw this as a great project to wrap C++ code for the Python project, as I will be using a CSV file to save the course and personal data. The main goal of this project will be to make the application very customizable by offering many different features. The current list of features I want to implement are:

- Reading a CSV file to add a batch of classes to the master list
- Manual single / batch additions to the master list in the app
- Creating and tracking different tags for classes (ex. "Critical Tracking", "For Minor", etc.)
- Planning feature for future semesters
  - Checks for time-sensitive classes (ex. if Calculus 1 has to be done before the 3rd semester, it will force the user to have it within the first two semesters)
  - Reads a JSON file of rules for a major completion
    - When planning is done, will reference the JSON to see if any rules are not completed
- Overview page for degree completion including:
  - Current GPA (Total, For Major, Towards Honors [optional])
  - Current semester
  - Overview of Critical Tracking classes with grades and credits
- Custom pages for each semester where classes have been completed
- List of classes that have been failed and **must** be retaken
- "Check if on track" button
- Ability to add on other majors, minors, and certificates both with JSON files or by user input in app
