import "./App.css";
import NewsPage from "./pages/NewsPage";
import { Route } from "react-router-dom";

function App() {
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);

  return <Route path="/:category?" component={NewsPage} />;

  // return (
  //   <Routes>
  //     <Route path="/*" element={<NewsPage />} />
  //     <Route path="/:category" element={<NewsPage />} />
  //   </Routes>
  // );
}

export default App;
