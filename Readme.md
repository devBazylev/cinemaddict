1. Use the `git log --oneline` command to view the list of commits. Commits go from top to bottom from newest to oldest, it looks something like this:

    ```bash
    c0ea9d8 1.2 Create function for generating menu markup WIP
    1a34516 1.1 Connect `src/main.js` script to `public/index.html`
    45f1ffe :hatching_chick: initial project state
    ```

2. Checkout to the desired commit using the `git checkout commit_hash` command. For example, like this `git checkout c0ea9d8`. To return everything as it was, use the `git checkout master` command.
