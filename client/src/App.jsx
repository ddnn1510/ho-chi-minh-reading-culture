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
  Test,
} from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as allPostsLoader } from './pages/admin/AllPosts';
import { loader as addPostLoader } from './pages/admin/AddPost';
import { action as deletePostAction } from './pages/admin/DeletePost';
import { postLoader, categoryLoader } from './pages/admin/EditPost';
import { loader as HomeLayoutLoader } from './pages/HomeLayout';
import { loader as categoryDetailLoader } from './pages/Category';
import { loader as testLoader } from './pages/Test';

import {
  AdminAddPost,
  AdminLayout,
  AdminAllPosts,
  AdminEditPost,
} from './pages/admin';

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
    loader: HomeLayoutLoader(queryClient),
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'category/:categoryId',
        element: <Category />,
        loader: categoryDetailLoader(queryClient),
      },
      {
        path: 'post/:postId',
        element: <Post />,
      },
      {
        path: 'contest',
        element: <Contest />,
      },
      {
        path: 'test',
        element: <Test />,
        loader: testLoader(queryClient),
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
      {
        path: 'edit-post/:postId',
        element: <AdminEditPost />,
        loader: async ({ params }) => {
          const [post, categories] = await Promise.all([
            postLoader(params.postId),

            categoryLoader(),
          ]);
          return { post, categories };
        },
      },
      { path: 'delete-post/:id', action: deletePostAction(queryClient) },
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
