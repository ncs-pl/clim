// Copyright 2023 Nicolas Paul, Younes Ouaammou, Lucas Paulo.
// All rights reserved.
// This file is governed by a BSD-style license that can be found in
// the LICENSE file.

// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@nc0/clim-eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
