/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-02-10 23:32:41
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-02-11 11:52:42
 * @FilePath: /minidemo/newapp/src/App.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { HomePage } from "./app/container/Homepage";
import "./App.css";

const AppContainer = styled.div`
  ${tw`
  w-full
  h-full
  flex
  flex-col
`}
`;
function App() {
  return (
    <AppContainer>
      <HomePage></HomePage>
    </AppContainer>
  );
}

export default App;
