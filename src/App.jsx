import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TaskBoard from "./components/Task/TaskBoard";

const App = () => {
  return (
    <section>
      <Header />
      <Hero />
      <TaskBoard />
      <Footer />
    </section>
  );
};

export default App;
