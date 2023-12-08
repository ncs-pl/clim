// Copyright 2023 Nicolas Paul, Younes Ouaammou, Lucas Paulo.
// All rights reserved.
// This file is governed by a BSD-style license that can be found in
// the LICENSE file.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      red: {
        light: "#E54D2E",
        dark: "#DD4425",
      },
      orange: {
        light: "#F76B15",
        dark: "#EF5F00",
      },
      yellow: {
        light: "#FFC53D",
        dark: "#FFBA18",
      },
      pink: {
        light: "#E93D82",
        dark: "#DF3478",
      },
      purple: {
        light: "#5B5BD6",
        dark: "#5151CD",
      },
      indigo: {
        light: "#3E63DD",
        dark: "#3358D4",
      },
      blue: {
        light: "#0090FF",
        dark: "#0588F0",
      },
      green: {
        light: "#46A758",
        dark: "#3E9B4F",
      },
      brown: {
        light: "#AD7F58",
        dark: "#A07553",
      },
      gray: {
        light: "#8D8D8D",
        dark: "#838383",
      },
      background: {
        base: "#FCFDFC",
        subtle: "#E7E9E7",
      },
      text: {
        primary: "#1D211C",
        secondary: "#60655F",
      },
    },
  },
  plugins: [],
};
