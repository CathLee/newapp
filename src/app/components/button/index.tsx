/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-02-11 16:22:09
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-02-11 16:53:29
 * @FilePath: /minidemo/newapp/src/app/components/button/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtomProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
    `}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-red-500
    text-red-500
    bg-transparent
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
  `};
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-red-500
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500
  `};
`;

export function Button(props: IButtomProps) {
  const { theme, text, className } = props;
  if (theme === "filled") {
    return <FilledButton className={className}>{text}</FilledButton>;
  } else {
    return <OutlinedButton className={className}>{text}</OutlinedButton>;
  }
}
