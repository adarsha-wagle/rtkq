import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/root_layout";
import DashLayout from "./layouts/dash_layout";

import Public from "./components/public";

import Login from "./features/auth/login";
import Welcome from "./features/auth/welcome";
import NotesList from "./features/notes/notes_list";
import UsersList from "./features/users/user_list";

import EditUser from "./features/users/edit_user";
import NewUserForm from "./features/users/new_user_form";

import EditNote from "./features/notes/edit_note";
import NewNote from "./features/notes/new_note";
import PreFetch from "./features/auth/pre_fetch";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Public />} />
      <Route path="login" element={<Login />} />
      <Route element={<PreFetch />}>
        {/* START DASH LAYOUT*/}
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="users">
            <Route index element={<UsersList />} />
            <Route path=":id" element={<EditUser />} />
            <Route path="new" element={<NewUserForm />} />
          </Route>
          <Route path="notes">
            <Route index element={<NotesList />} />
            <Route path=":id" element={<EditNote />} />
            <Route path="new" element={<NewNote />} />
          </Route>
        </Route>
        {/* END DASH */}
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
