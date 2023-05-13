import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";

export const Layout = ({children}) => {
    return <Container>
        {children}
        <Outlet />
        </Container>

}

