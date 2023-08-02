import React from "react";
import { Routes, Route } from "react-router-dom";
import { route } from "./route";
import { Users } from '../Users';
import { Home } from '../Home';
import { NewUser } from '../NewUser';

export function Routing(): React.JSX.Element {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={route.users.to()} element={<Users />} />
      <Route path={route.newUser.to()} element={<NewUser />} />
      <Route path={route.users2.to()} element={<Users displayCountry/>} />
      <Route path={route.newUser2.to()} element={<NewUser displayCountry/>} />
    </Routes>
  );
}
