
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      {/* header */}
      <Header />
      {/* courses */}
      <CourseList />
      <Footer />
    </div>
  );
}
export default App;
