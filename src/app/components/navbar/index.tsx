/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-02-11 11:38:36
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-02-11 13:09:27
 * @FilePath: /minidemo/newapp/src/app/components/navbar/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navItem";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    flex
    flex-row
    max-w-screen-2xl
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
`};
`;

const LogoContainer = styled.div``;

export function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo></Logo>
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}
