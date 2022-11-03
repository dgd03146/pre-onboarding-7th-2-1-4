import { Routes, Route } from "react-router-dom";
import { Layout } from "@/layouts";
import { Cars, CarDetail } from "@/pages";
import { NotFound } from "@/components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Cars />} />
        <Route path="/detail:car_number" element={<CarDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
