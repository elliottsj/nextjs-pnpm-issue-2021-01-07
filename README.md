# nextjs-pnpm-issue-2021-01-07

Demonstration of an issue involving Next.js, pnpm, and react-modal.

Client-side JS fails to execute in a specific scenario:

* pnpm is used to install dependencies. (using version 5.14.3 as of this writing)
* react-modal is imported in one page (`about.js`) but not in another page (`index.js`).

### Repro

1. Install pnpm and dependencies.

    ```shell
    npm install -g pnpm@5.14.3
    pnpm install
    ```

2. Build the app for production and start it.

    ```shell
    pnpm build
    pnpm start
    ```

3. Visit http://localhost:3000

4. Click the "hello" button.

   At this point, we expect to see an alert with the message "hello", and a console message "rendering IndexPage", but neither are observed.

### Observations

1. Deleting the react-modal import and usage in `about.js` yields the expected behaviour in step (4) above.

2. Importing react-modal in `index.js` yields the expected behaviour in step (4) above.

3. Installing dependencies with yarn yields the expected behaviour in step (4) above.

Based on these observations, it seems likely that this is a bundling / module resolution problem.
