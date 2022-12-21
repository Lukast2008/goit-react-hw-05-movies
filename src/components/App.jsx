import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';





import  Layout  from './pages/Layout';
// import Home  from './pages/Home';
// import  Movies  from './pages/Movies';


import { Modal } from './pages/Modal';
import { Reviews } from './pages/Reviews';
import { Cast } from './pages/Cast';
import { NotFoundPages } from './pages/NotFound';

// const Layout = lazy(() => import("./pages/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));

 
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<Modal />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Modal />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path='*' element={ <NotFoundPages/>}/>
      </Routes>
    </>
  );
};
