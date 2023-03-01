/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-02-11 12:01:16
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-02-11 12:37:18
 * @FilePath: /minidemo/newapp/src/app/components/logo/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarLogoImg from "../../../assets/images/car-logo.png";

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `}
`;

const Image = styled.div`
  width: auto;
  ${tw`
    h-6
    md:h-9
    `}
  img {
    width:auto
    height:100%
  }
`;

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt="#" />
      </Image>
      <LogoText>YourCar</LogoText>
    </LogoContainer>
  );
}
