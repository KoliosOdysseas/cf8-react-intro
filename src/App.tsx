// // App.tsx
// import ClassComponent from "./componets/ClassComponent";
// import FunctionalComponent from "./componets/FunctionalComponents";
// import ArrowFunctionalComponent from "./componets/ArrowFunctionalComponent";
import ArrowFunctionalComponentWithProps from "./componets/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsTypes from "./componets/ArrowFunctionalComponentWithPropsTypes.tsx";
import Card from "./componets/Card.tsx";

function App() {
    return (
        <>
            {/*<ClassComponent />*/}
            {/*<FunctionalComponent />*/}
            {/*<ArrowFunctionalComponent />*/}
            {/*<ArrowFunctionalComponentWithProps  title="Is a Arrow Functional Component With Props" />*/}
            {/*<ArrowFunctionalComponentWithProps  title="2nd title" />*/}
            {/*<ArrowFunctionalComponentWithPropsTypes title="Is a Arrow Functional Component With Props"*/}

            {/*                                      description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, quae!"/>*/}

            <Card title="Card">
              <ArrowFunctionalComponentWithProps
                title="Is a Arrow Functional Component With 2 Props"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam."
              />
            </Card>
        </>
    );
}

export default App;
