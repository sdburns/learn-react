1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?

A: It adds them inside the HTML element that is named as `root` which is specified when the `createRoot()` method is called.


2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```

A: A JavaScript object representing a H1 element.


3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```

A: You can't render sibling HTML elements side by side with `root.render()` as these need to be nested inside a single element such as a <main> or <div>.


4. What does it mean for something to be "declarative" instead of "imperative"?

A: Imperative is step by step instructions, and declarative is descriptive instructions. React is decalarative because you describe what should display on the page and let the React framework handle the details on how it adds things to the page.


5. What does it mean for something to be "composable"?

A: Smaller reusable pieces of code we can use in many places to minimise bugs and duplications.