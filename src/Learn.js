import './Learn.css'

function Learn(){
    return (
        <div>
            <h1>
                What we have learnt today? 
            </h1>
            <p className="blackBoard">
                1. React is library not framework.  <br/>
                2. React uses virtual DOM. It is also called shadow DOM which is layer between user and actual DOM <br/>
                3. When the state of element changes react compares VDOM and DOM using diffing algorithm and alters the actual DOM with minimum possible steps providing smooth UI/UX by not refreshing DOM tree<br/>
                8. In JSX class for element is className <br/>
                4. React is uni directional (data can only from parent to child) <br/>
                5. A stateless component, also known as a functional component, is a fundamental concept in React that represents a UI element without any internal state management. <br/>
                6. React uses JSX. (Javascript XML). Using JSX we can write HTML in JS.  <br/>
                7. In JSX Components/Elements must have a parent <br/>
                8. In JSX Component name must start with capital A <br/>
                9. The values are sent using attributes <br/>
                10. Component imported must be exported <br/>
                11. Root file is index.js. Runtime env always try to find it <br/>
                12. There is no need to define extension for .js file in import statement
            </p>
        </div>
    )
}

export default Learn;