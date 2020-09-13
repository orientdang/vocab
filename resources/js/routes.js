import Home from "./screen/Home";
import React from 'react';
import NotFound from "./components/NotFound";
import { PATHS } from "./constants";
import Practice from "./screen/Practice";

export const routes = [
    {
        path: PATHS.HOME,
        exact: true,
        component: Home
    },
    {
        path: PATHS.PRACTICE,
        component: Practice
    },
    {
        path: PATHS.NOT_FOUND,
        component: NotFound
    }
];

