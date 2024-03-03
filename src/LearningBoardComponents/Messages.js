var msgs=[
    'Hello this app was created on 26th Feb 2024. I will tell you what I have learnt on this day',
    'Today I learned about context API',
    'So what is context API?',
    'Before learning context API we need to see what was the problem so that context API was introduced',
   `In react usually Data is passed through parent to child and to grandchildren, as there is single source of truth. 
    This will create problems and will lead to code which will be difficult to maintain. This is known as prop drilling.`,
    `What if one wants any variable or state globally like theme on language? If there are many nested children components
    this will be very difficult`,
    'To resolve this problem Redux and Context API were introduced to maintain the state globally i.e global variables',
    'If any child requires state/data it may access the data through context API if its in the scope of context',
    'Context API use createContext() hook',
    'Another solution for this is useReducer hook',
    `Context is not a "state management" tool. It's a Dependency Injection mechanism, whose only purpose is to make a single value accessible to a nested tree of React components.`,
    `Today is 03/03/2024`,
    `Today I learnt about useReducer()`,
    `useReducer and useState are almost alike but their functionality is different`,
    `useReducer was introduced after Redux, it provides a central location (The Reducer) for the state management which manages state
    on the basis of switch statements, and the user of that reducer will change state via Dispatch`,
    `It accepts a reducer function as its first parameter and the initial state as the second.`,
    `Changing board theme is an example`
]

export default msgs