// Copyright 2023 Nicolas Paul, Younes Ouaammou, Lucas Paulo.
// All rights reserved.
// This file is governed by a BSD-style license that can be found in
// the LICENSE file.

import { PropsWithChildren } from 'react';

function Paragraph(props: PropsWithChildren<{}>) {
    return <p>{props.children}</p>
}

export default Paragraph;