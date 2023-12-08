// Copyright 2023 Nicolas Paul, Younes Ouaammou, Lucas Paulo.
// All rights reserved.
// This file is governed by a BSD-style license that can be found in
// the LICENSE file.

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@nc0/clim-eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
