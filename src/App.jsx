import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Appcontext } from "./context/contextErr";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetail from "./components/VideoDetail";

import "./App.css";

function App() {
  return (
    <Appcontext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Appcontext>
  );
}

export default App;
