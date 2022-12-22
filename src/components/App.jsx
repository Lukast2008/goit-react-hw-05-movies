import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('../pages/Layout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Modal = lazy(() => import('../pages/Modal'));
const Reviews = lazy(() => import('../pages/Reviews'));
const Cast = lazy(() => import('../pages/Cast'));
const NotFoundPages = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<Modal />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </Suspense>
    </>
  );
};
