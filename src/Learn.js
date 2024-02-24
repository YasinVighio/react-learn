import './Learn.css'

function Learn(){
    return (
        <div>
            <h1>
                What we have learnt today? 
            </h1>
            <p className="blackBoard">
                0. Functional compoenents. A stateless component, also known as a functional component, is a fundamental concept in React that represents a UI element without any internal state management. <br/>
                1. React is uni directional (data can only from parent to child) <br/>
                2. React is SPA <br/>
                3. In JSX Components must have a parent <br/>
                4. In JSX Component name must start with capital A <br/>
                5. How to pass data from parent to child <br/>
                6. React has VDOM <br/>
                7. React detects changes in VDOM and manipulates real DOM accordingly providing smooth UI/UX by not refreshing DOM tree<br/>
                8. In JSX class for element is className <br/>
                9. The values are sent using attributes <br/>
                10. Component imported must be exported <br/>
                11. Root file is index.js. Runtime env always try to find it <br/>
                12. There is no need to define extension for .js file in import statement
            </p>
        </div>
    )
}

export default Learn;