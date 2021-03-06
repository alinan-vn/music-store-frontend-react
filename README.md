# Writeup for Submission:
# HCL SimpliLearn Capstone - Music Store

## Music Store - Planning repo
- https://github.com/alinan-vn/music-store-planner-hcl

## Music Store - Frontend (currently on this repo, btw)
- https://github.com/alinan-vn/music-store-frontend-react

## Music Store - Backend
- https://github.com/alinan-vn/music-store-backend-spring

<hr />

## Problem Statement (in pdf form)
- https://github.com/alinan-vn/music-store-planner-hcl/blob/master/FSD%20Java%20Capstone%20Project%20Problem%20Statement%20-%20Online%20Music%20Store.pdf

## Steps
1. Go to the backend repo link, clone and run that app.
2. Go to the frontend repo link, clone and `npm install` & `npm start` the app.
3. Use the app!

## Things we missed due to the time contraint
We completed the backend with full functinality (CRUD Operations, etc).
We also complete the frontend with full visual functionality. Some parts had data hardcoded. These are listed:
- Profile: edit form, delete form
- Profile Payment info: edit form
- Register account: edit form
- Shopping cart: getting correct data from the backend
- Search: search algo, rendering
- Spring Security Config: full security
- Authentication providers, password encryption, jwt tokens, etc
- JUnit and Mock testing
- Heroku live server


<hr />

# DEV TEAM

Make sure to branch off before `git add`ing, `git commit`ting, and especially `git push`ing!!

### Making a new branch

Use `git branch -b [BRANCH_NAME]` to make a new branch and switch to that branch.
Ex. `git branch -b alejandro` makes a branch called 'alejandro' and switches me to that branch.

### Before Starting to work on the code at all (pt. 2)

`npm install` installs all the dependencies that will allow you run the app.

`npm start` starts a live server on port 3000.

### Coding

A couple things to make sure you follow for best practices
- Only alter the files related to your task!
    - If another file's current format/code is casuing a bug preventing you from correcting your code, try to see if the bug started before or after you started coding. Also, check in with the team so that we can cross compare our code.
- Add a commit after changing the code:
    - Commit when functional code (functions, files, css classes, etc)