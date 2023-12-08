// Copyright 2023 Nicolas Paul, Younes Ouaammou, Lucas Paulo.
// All rights reserved.
// This file is governed by a BSD-style license that can be found in
// the LICENSE file.

"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
