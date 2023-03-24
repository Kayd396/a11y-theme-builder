import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorHandler } from './ErrorHandler';
import App from './App';
import { IntlProvider } from 'react-intl';
//import messages from './locales/data.json';

console.log("Document cookie=",document.cookie);

function getCookie(key:string): any {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
}

function getUser(): any {
    try {
        const user = getCookie("user");
        console.log("getUser() returning from cookie = ", user);
        if (user) return user;
    } catch (e) {
        console.warn("No cookie set - using default user");
    }
    return "Unknown";
}

let user = getUser();
console.log("Authenticated user =", user);
document.title = "A11y ThemeBuilder"

async function loadLocale() {
    switch (navigator.language) {
        case "en":
        case "en-US":
            return await import("./locales/data.json");
        default:
            return await import("./locales/data.json")
    }
}

loadLocale().then(function(messages:any) {
    const container = document.getElementById('root');
    if (container) {
        const root = createRoot(container);
        root.render(
            <React.StrictMode>
                <ErrorHandler>
                    <IntlProvider locale={navigator.language} messages={messages} >
                        <App user={user}/>
                    </IntlProvider>
                </ErrorHandler>
            </React.StrictMode>
        )
    }
});

