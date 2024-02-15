import { useEffect } from "react";
import "./App.css";

const APP_URLS = {
    android: "market://details?id=com.sourceone.buyer",
    ios: "https://apps.apple.com/in/app/source-buy/id6443432457",
};

function App() {
    useEffect(() => {
        const url = getURL();
        if (url) {
            window.location.href = url;
        }
    }, []);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <a href={APP_URLS.android}> Go to Android App Store </a>
            <br />
            <br />
            <a href={APP_URLS.ios}> Go to IOS App Store </a>
        </div>
    );
}

export default App;

function getURL() {
    // Check if the user agent string contains "Android"
    if (navigator.userAgent.indexOf("Android") !== -1) {
        return APP_URLS.android;
    }

    // Check if the user agent string contains "iPhone" or "iPad"
    if (
        navigator.userAgent.indexOf("iPhone") !== -1 ||
        navigator.userAgent.indexOf("iPad") !== -1
    ) {
        console.log("This device is running iOS.");
        return APP_URLS.ios;
    }
}
