import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Register,
  Login,
  Landing,
  Error,
  Contest,
  Category,
  Post,
} from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as allPostsLoader } from './pages/admin/AllPosts';
import { loader as addPostLoader, loader } from './pages/admin/AddPost';
import { AdminAddPost, AdminLayout, AdminAllPosts } from './pages/admin';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'category/:categoryId',
        element: <Category />,
      },
      {
        path: 'post/:postId',
        element: <Post />,
      },
      {
        path: 'contest',
        element: <Contest />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction(queryClient),
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminAddPost />,
        loader: addPostLoader,
      },
      {
        path: 'posts',
        element: <AdminAllPosts />,
        loader: allPostsLoader(queryClient),
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
