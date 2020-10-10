# Description
A tiny library to disable annoying the create-react-app's errors' overlay.
**Do not use it in production mode!**

# Usage
1. Install a package
`npm i disable-react-error-overlay -D` or `yarn add disable-react-error-overlay -D`.

2. Inside your `src/index.js` file use this BEFORE any `ReactDOM.render`

```
if (process.env.NODE_ENV === 'development') {
    import("disable-react-error-overlay").then(() => {
        const iframe = document.querySelector('iframe');
        if (iframe) iframe.remove();
    });
}
```
