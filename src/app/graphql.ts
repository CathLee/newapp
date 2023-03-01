/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-02-25 20:00:58
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-02-25 20:01:36
 * @FilePath: /minidemo/newapp/src/app/graphql.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL}/graphql` as any,
  cache: new InMemoryCache(),
});
