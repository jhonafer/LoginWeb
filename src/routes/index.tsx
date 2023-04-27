import { Route, Routes as RoutesReactRouterDom } from "react-router-dom";
import { DefaultLayout } from "../Layouts/DefaultLayout";
import { Dashboard } from "../pages/Dashboard";

import { Register } from "../pages/Register";
import { SignIn } from "../pages/SignIn";
import { RequireAuth } from "./RequireAuth";
import { RequireNotAuth } from "./RequireNotAuth";
import { User } from "../pages/User";

export function Routes() {
  return (
    <RoutesReactRouterDom>
      <Route path='/' element={
        <RequireNotAuth>
          <SignIn />
        </RequireNotAuth>
      } />

      <Route path='/register' element={
        <RequireNotAuth>
          <Register />
        </RequireNotAuth>
      } />

      <Route element={
        <DefaultLayout />
      }>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />
        <Route path='/user' element={
          <RequireAuth>
            <User />
          </RequireAuth>
        } />
      </Route >
    </RoutesReactRouterDom >
  )
}
