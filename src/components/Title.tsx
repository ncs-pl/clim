// Copyright 2023 Nicolas Paul, Younes Ouaammou, Lucas Paulo.
// All rights reserved.
// This file is governed by a BSD-style license that can be found in
// the LICENSE file.

import { PropsWithChildren } from 'react';

function Title(props: PropsWithChildren<{}>) {
    return <h1>{props.children}</h1>
}

export default Title;