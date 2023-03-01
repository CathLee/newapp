/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-02-11 18:19:39
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-02-11 18:26:16
 * @FilePath: /minidemo/newapp/src/app/components/marginer/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import styled from "styled-components";

export interface IMarginerProps {
  margin: number | string;
  direction?: "horizontal" | "vertical";
}

const HorizonalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

function Marginer(props: IMarginerProps) {
  const { direction } = props;
  if (direction === "horizontal") {
    return <HorizonalMargin {...props}></HorizonalMargin>;
  } else {
    return <VerticalMargin {...props}></VerticalMargin>;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export { Marginer };
