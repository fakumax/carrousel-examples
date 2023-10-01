import { Layout } from '@/components';
import { Framer, NoMatch, React, Swiper, CssSlider } from '@/pages';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<React />} />
        <Route path="/framer" element={<Framer />} />
        <Route path="/css" element={<CssSlider />} />
        <Route path="/swiper" element={<Swiper />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
