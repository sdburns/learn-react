import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function Page() {
    return (
        <ol>
            <li>Learning a new framework to improve my front end development skills.</li>
            <li>Will be able to contribute to React projects at work.</li>
        </ol>
    )
}

root.render(
    <Page />
)
