/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */


import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
root.render(
    <ul>
        <li>Learning a new framework to improve my front end development skills.</li>
        <li>Will be able to contribute to React projects at work.</li>
    </ul>
)