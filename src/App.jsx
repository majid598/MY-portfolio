import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import { Suspense } from "react";
import Loader from "./Components/Loader";
import Contact from './Pages/Contact'

// import Alert from '@/Components/Alert'

const page = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default page;
