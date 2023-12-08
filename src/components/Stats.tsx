// Copyright 2023 Nicolas Paul, Younes Ouaammou, Lucas Paulo.
// All rights reserved.
// This file is governed by a BSD-style license that can be found in
// the LICENSE file.

import { MdPerson, MdPark, MdFactory, MdAttachMoney } from "react-icons/md";

function visualStatLabel(kind: 'climate' | 'industry' | 'finance' | 'inhabitants') {
    switch (kind) {
        case 'climate':
            return 'Climat';
        case 'industry':
            return 'Industrie';
        case 'finance':
            return 'Finance';
        case 'inhabitants':
            return 'Habitants';
    }
}

function levelClass(level: number) {
    if (level < 10) {
        return 'redDark';
    } else if (level < 20) {
        return 'redLight';
    } else if (level < 30) {
        return 'orangeDark';
    } else if (level < 40) {
        return 'orangeLight';
    } else if (level < 50) {
        return 'yellowLight';
    } else if (level < 60) {
        return 'yellowDark';
    } else if (level < 80) {
        return 'greenLight';
    } else
        return 'greenDark';
}

function Stats(props: {
    kind: 'climate' | 'industry' | 'finance' | 'inhabitants',
    level: number,
}) {
    return (<>
        <div>
            <div className='tooltip'>
                <span className='tooltiptext'>
                    {visualStatLabel(props.kind)}
                </span>
            </div>
            <div className={levelClass(props.level)}>
                {props.kind === 'climate' && <MdPark fill="true" size={32} />}
                {props.kind === 'industry' && <MdFactory fill="true" size={32} />}
                {props.kind === 'finance' && <MdAttachMoney fill="true" size={32} />}
                {props.kind === 'inhabitants' && <MdPerson fill="true" size={32} />}
            </div>
        </div >
    </>);
}

export default Stats;