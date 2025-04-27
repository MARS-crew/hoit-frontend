import { jsx as _jsx } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
export const App = () => {
    return (_jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx("div", { children: "WBS Web" }) }) }));
};
