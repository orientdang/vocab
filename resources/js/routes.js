import Home from "./screen/Home";
import React, { Component } from 'react';
import NoMatch from "./components/NoMatch";

export const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: '*',
        component: NoMatch
    }
];


