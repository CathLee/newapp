/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-02-10 23:32:41
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-02-10 23:35:03
 * @FilePath: /minidemo/newapp/src/app/store.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
