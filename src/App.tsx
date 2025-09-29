// App.tsx
import ClassComponent from "./componets/ClassComponent";
import FunctionalComponent from "./componets/FunctionalComponents";
import ArrowFunctionalComponent from "./componets/ArrowFunctionalComponent";
import ArrowFunctionalComponentWithProps from "./componets/ArrowFunctionalComponentWithProps.tsx";

function App() {
    return (
        <>
            <ClassComponent />
            <FunctionalComponent />
            <ArrowFunctionalComponent />
            <ArrowFunctionalComponentWithProps  title="Is a Arrow Functional Component With Props" />
            <ArrowFunctionalComponentWithProps  title="2nd title" />
        </>
    );
}

export default App;
