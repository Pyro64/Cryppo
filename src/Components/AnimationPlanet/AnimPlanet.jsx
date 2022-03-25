import React from 'react';
import { Planet } from 'react-planet';
import AnimPlanetAtom from './AnimPlanetAtom';
import AnimPlanetCenter from './AnimPlanetCenter';

import test from '../../Images/payIcon/1.svg'
import test2 from '../../Images/payIcon/2.svg'
import test3 from '../../Images/payIcon/3.svg'
import test4 from '../../Images/payIcon/4.svg'
import test5 from '../../Images/payIcon/5.svg'
import test6 from '../../Images/payIcon/6.svg'
import test7 from '../../Images/payIcon/11.svg'
const AnimPlanet = () => {
    return (
        <Planet
            centerContent={<AnimPlanetCenter />}
            // hideOrbit
            autoClose
            orbitRadius={120}
            bounceOnClose
            rotation={105}
            // the bounce direction is minimal visible
            // but on close it seems the button wobbling a bit to the bottom
            bounceDirection="BOTTOM"
            orbitStyle={(defaultStyle) => ({
                ...defaultStyle,
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: '#2f69ff',
            })}
        >
            <AnimPlanetAtom img={test7} />
            <AnimPlanetAtom img={test2} />
            <AnimPlanetAtom img={test3} />
            <AnimPlanetAtom img={test4} />
            <AnimPlanetAtom img={test5} />
            <AnimPlanetAtom img={test6} />
        </Planet>
    );
}

export default AnimPlanet;
