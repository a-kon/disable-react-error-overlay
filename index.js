// Workaround to remove react-error-overlay
try {
    /*
        In case we call this function before loading the overlay Iframe
        it will call an `updateIframeContent` function
        https://github.com/facebook/create-react-app/blob/66bf7dfc43350249e2f09d138a20840dae8a0a4a/packages/react-error-overlay/src/index.js#L163
        that will throw an Error that we are going to catch later.
        The `update` function will never be fully executed again
        https://github.com/facebook/create-react-app/blob/66bf7dfc43350249e2f09d138a20840dae8a0a4a/packages/react-error-overlay/src/index.js#L126
    */
    window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady();
} catch(error) {
    console.log('React error overlay has been disabled');

    window.onerror = (...args) => {
        const [error] = args;

        /*
            All we have to do now is to catch error from `updateIframeContent`
            That indicates that library tries to show an error without iframe
            https://github.com/facebook/create-react-app/blob/66bf7dfc43350249e2f09d138a20840dae8a0a4a/packages/react-error-overlay/src/index.js#L162
        */

        return error.includes('Iframe has not been created yet');
    }
}
