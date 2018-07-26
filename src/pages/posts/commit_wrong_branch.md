---
title: "Help! I commited to the wrong branch."
path: "/writing/commit-wrong-branch"
description: "Everyone's made their commits to the wrong branch at least once. Here is a simple fix."
tags: ["git", "cli"]
publicationDate: "2017-09-30"
published: true
keywords: ['wrong branch', 'undo git commit', 'commit']
---

At [Metova](https://metova.com) we use git flow when making changes to our codebase.
That is when adding a feature or fixing a bug, we branch from develop to create a feature or bugfix branch and merge back into develop when our work is complete.
This is probably a familar process to most of you.

Something else that might be familar is completing your feature preparing, to push your changes, and realizing your 12 commits were made on develop.
Now, if you're anything like me git can still be a little intimidating when trying to fix your errors.
Have no fear, though. This particular screw up is very easy to fix.

First, create a feature or bugfix branch from develop. Then, reset develop back to where it should be.

```bash
git branch <name-of-new-branch>

# find the sha if you don't already know it.
git log

git reset <SHA-to-go-back-to> --hard
```

That's it. Now your new branch will contain the commits you made on develop and develop will be back where you want it.
