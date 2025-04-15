1. What is a React component?

A: A function that returns React elements. React elements are a version of a HTML element you would see in the DOM.


2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

A: Function needs to start with a capital letter (CamelCase).


3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

A: Can't render a component like a function call with () - instead needs angled brackets to tell React to build a component from the function. e.g. "root.render(<Header />)"