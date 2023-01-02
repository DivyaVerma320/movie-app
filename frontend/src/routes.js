import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

const Catalog = React.lazy(() => import("./pages/Catalog"));
const Detail = React.lazy(() => import("./pages/Detail"));
const Home = React.lazy(() => import("./pages/Home"));

const Routor = () => {
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Routes>
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
export default Routor;
