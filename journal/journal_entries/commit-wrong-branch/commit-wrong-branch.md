At [Metova](https://metova.com) we use git flow when making changes to our codebase.
That is when adding a feature or fixing a bug, we branch from develop to create a feature or bugfix branch and merge back into develop when our work is complete.
This is probably a familar process to most of you.

Something else that might be familar is completing your feature preparing, to push your changes, and realizing your 12 commits were made on develop.
Now, if you're anything like me git can still be a little intimidating when trying to fix your errors.
Have no fear, though. This particular screw up is very easy to fix.

First you just need to create a feature or bugfix branch from develop and then reset develop back to where it should be.

```bash
git branch <name-of-new-branch>

# find the sha if you don't already know it.
git log

git reset <SHA-to-go-back-to> --hard
```

And that's it. Now your new branch will contain the commits you made on develop and develop will be back where it started from.
