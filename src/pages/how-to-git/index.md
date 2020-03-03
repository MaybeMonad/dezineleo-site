---
title: How to Git
date: 2019-10-22
spoiler: How to apply Git to your projects.
type: topic
thumbnail: ./git.svg
---

## What is Git?

Git is officially defined as a **distributed version control system (VCS)**.

<div class="link-box">

Git official homepage: [https://git-scm.com/](https://git-scm.com/)

</div>

## How to use Git?

### 1. Install Git

Download Git through the link below.

<div class="link-box">

You can download Git here: [https://git-scm.com/downloads](https://git-scm.com/downloads)

</div>

After installing it, open your terminal and type the following command to check if the Git is ready to go.

```terminal
git --version
```

### 2. Git Configuration

First of all, you need to set up your name and email address as follows:

```terminal
git config --global user.name "Your Name"
git config --global user.email name@example.com
```

### 3. Git it

Here is what the magic happens.

```terminal
# Initializing a repository
git init

# Check status
git status

# Stage files
git add .

# Make commits
git commit -m 'I learned how to use Git today'

# Commit history
git log

# Switch to specific commit
git checkout <commit-hash>

# Go back to the latest commit
git checkout master
```

### 4. Branch it

```terminal
# Create a new branch
git branch <new-branch-name>

# Change between the branches
git checkout <branch-name>

# Switch to the branch once created
git checkout -b <new-branch-name>

# Switch to the master branch
git checkout master
```

### 5. Merge it

```terminal
# Merge changes from a different branch into current branch
git merge <branch-name>
```

### 6. Remote it

```terminal
# Add a remote repository
git remote add origin <repo-url>

# Pull changes from the remote repo into master branch
git pull origin master

# Push commits of master to remote repo
git push origin master
```

### 7. Other commands

```terminal
# List branches
git branch

# Delete branch
git branch -d <branch-name>
```

## Links

+ [Learn Git In 15 Minutes](https://www.youtube.com/watch?v=USjZcfj8yxE)
+ [Pro Git Book](https://git-scm.com/book/en/v2)

