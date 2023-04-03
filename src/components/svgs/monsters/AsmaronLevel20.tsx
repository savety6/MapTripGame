import * as React from "react";
import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    RadialGradient,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

type Props = {
    type?: "fire" | "water" | "wind" | "earth" | "light" | "void";
};

function SvgComponent(props: Props) {
    const color = {
        body: {
            start: "",
            mid: "",
            end: "",
        },
        eye: "FAFF00",
    };
    return (
        <Svg
            width={2315}
            height={1622}
            viewBox="0 0 2315 1622"
            fill="none"
            //   xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G filter="url(#filter0_bdi_702_24)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1746 1262c-83.2 122.98-135.33 252.83-261 296.5-125.67 43.67-271.35 23.62-398.5 50-160.718 33.35-378.5-116-419.5-346.5s-233-28-233-28l66.5-320L728 627l574-283.5L1664 198l414 104.5L2310 198s-113.5 324.5-52 429-474.5-104.5-474.5-104.5c-82.17-15-256.9-40.5-298.5-22.5-41.6 18-375.83 202.667-540 293.5-164.167 90.833-156.064 198.001-123 330.5 36.023 144.36 149.041 228.17 297.5 238 103.47 6.85 187.9 37.49 275.5-18 108.75-68.89 102.53-204.59 194.5-317 67.84-82.927 194-194 194-194L1664 1086.5 2011 833l-227.5 291 209-123.5S1824.64 1145.76 1746 1262z"
                    fill="url(#paint0_linear_702_24)"
                    stroke="#000"
                />
                <G fillRule="evenodd" clipRule="evenodd">
                    <Path
                        d="M1994.5 376.5l83.5-33 106 88.5s-118.92-16.62-159.5-31c-26.34-9.333-30-24.5-30-24.5zm69 7L2078 359v24.5l-11.5 22-3-22zM1888.5 425l67-24 89.5 100-89.5-27.5-67-48.5zm60 16.5l7-23 7 23-7 18.5-7-18.5z"
                        fill="#FF0"
                    />
                    <Path
                        d="M1994.5 376.5l83.5-33 106 88.5s-118.92-16.62-159.5-31c-26.34-9.333-30-24.5-30-24.5zm69 7L2078 359v24.5l-11.5 22-3-22zM1888.5 425l67-24 89.5 100-89.5-27.5-67-48.5zm60 16.5l7-23 7 23-7 18.5-7-18.5z"
                        stroke="#000"
                    />
                </G>
                <Path
                    d="M1261.84 382.5l176-287.5-361-94L188.5 382.5l826.84-46 100.5 116.5 146-70.5z"
                    fill="url(#paint1_linear_702_24)"
                    stroke="#000"
                />
                <Path
                    d="M1118 577.5L1294 290l-361-94-586.5 317.5L5 847.5l866.5-316L972 648l146-70.5z"
                    fill="url(#paint2_radial_702_24)"
                    stroke="#000"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_702_24"
                    x1={1372}
                    y1={198}
                    x2={1372.5}
                    y2={1698}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="red" />
                    <Stop offset={0.463469} stopColor="red" stopOpacity={0.5} />
                    <Stop
                        offset={0.538213}
                        stopColor="red"
                        stopOpacity={0.56}
                    />
                    <Stop offset={1} stopColor="#FF0" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_702_24"
                    x1={998.5}
                    y1={180}
                    x2={813.171}
                    y2={453}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="red" />
                    <Stop offset={1} stopColor="#FF0" />
                </LinearGradient>
                <RadialGradient
                    id="paint2_radial_702_24"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0 325.75 -1067.39 0 649.5 521.75)"
                >
                    <Stop stopColor="#FF0" />
                    <Stop offset={1} stopColor="red" />
                </RadialGradient>
            </Defs>
        </Svg>
    );
}

export default SvgComponent;
