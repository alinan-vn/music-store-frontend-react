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