import Container from "./components/Container";

const App = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-5xl text-center font-bold">Course Registration</h1>
      <div className="mt-12">
       <Container></Container>
      </div>
    </div>
  );
};

export default App;