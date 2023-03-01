/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-02-10 23:48:43
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-02-10 23:49:09
 * @FilePath: /minidemo/newapp/craco.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
