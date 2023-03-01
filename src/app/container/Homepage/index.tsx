/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-02-11 11:37:38
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-02-11 18:46:55
 * @FilePath: /minidemo/newapp/src/app/container/Homepage/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { Marginer } from "../../components/marginer";
import { BookCard } from "../../components/bookCard";
import { BookingSteps } from "./bookingSteps";
import { AboutUs } from "./aboutUs";
import { TopCars } from "./topCars";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar></Navbar>
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
    </PageContainer>
  );
}
