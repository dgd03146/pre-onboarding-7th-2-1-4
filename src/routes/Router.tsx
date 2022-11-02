import { Layout } from "@/layouts";
import { Routes, Route } from "react-router-dom";
import { Cars, CarDetail } from "@/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Cars />} />
        <Route path="/:car_number" element={<CarDetail />} />
      </Route>
    </Routes>
  );
};

export default Router;
