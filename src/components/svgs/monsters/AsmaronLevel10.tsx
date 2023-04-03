import { FC } from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

type Props = {
    type?: 'fire' | 'water' | 'wind' | 'earth' | 'light' | 'void';
};

function SvgComponent<FC>(props: Props) {
    //change color game by type
    const color = { 
        body: {
            start: "",
            mid: "",
            end: ""
        },
        eye: "",
        backWing: "",
        frontWing: {
            start: "",
            end: ""
        }
    }
    switch (props.type) {
        case "fire":
            color.body.start = "#FF0000";
            color.body.mid = "#FF3C2E";
            color.body.end = "#FCA92C";
            color.eye = "yellow";
            color.backWing = "#F93232";
            color.frontWing.start = "#F75E5E";
            color.frontWing.end = "#F5BD7A";
            break;
        case "water":
            color.body.start = "#0027FF";
            color.body.mid = "#1120F1";
            color.body.end = "#00FFFF";
            color.eye = "#0000FF";
            color.backWing = "#0066FF";
            color.frontWing.start = "#00aaFF";
            color.frontWing.end = "#00ffFF";
            break;
        case "wind":
            color.body.start = "#11FFFF";
            color.body.mid = "#55aaFF";
            color.body.end = "#11DDDD";
            color.eye = "#00FF00";
            color.backWing = "#00FFFF";
            color.frontWing.start = "#00FFFF";
            color.frontWing.end = "#00AAFF";
            break;
        case "earth":
            color.body.start = "#805237";
            color.body.mid = "#934800";
            color.body.end = "#b2703e";
            color.eye = "#FFA500";
            color.backWing = "#622a01";
            color.frontWing.start = "#b2703e";
            color.frontWing.end = "#FFA500";
            break;
        case "light":
            color.body.start = "#85c0e0";
            color.body.mid = "#FFFF00";
            color.body.end = "#eaeeea";
            color.eye = "#46b3da";
            color.backWing = "#f0c204";
            color.frontWing.start = "#71d5e8";
            color.frontWing.end = "#f7e411";
            break;
        case "void":
            color.body.start = "#9116dc";
            color.body.mid = "#2c0041";
            color.body.end = "#58165a";
            color.eye = "yellow";
            color.backWing = "#9116dc";
            color.frontWing.start = "#2c0041";
            color.frontWing.end = "#9116dc";
            break;
        default:
            color.body.start = "#FF0000";
            color.body.mid = "#FF3C2E";
            color.body.end = "#FF3C2E";
            color.eye = "yellow";
            color.backWing = "#F93232";
            color.frontWing.start = "#F75E5E";
            color.frontWing.end = "#F5BD7A";
            break;
    }

    return (
        <Svg
            width={120}
            height={80}
            viewBox="0 0 1925 1305"
            fill="none"
            {...props}
        >
            <G filter="url(#filter0_bd_702_14)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M497.5 1236.37c124.457 56.27 345 57.5 345 57.5s319.16 23.19 445.5-103c103.64-103.52 28.19-243.203 124-354.005 102.47-118.505 373.59-81.042 454-215.5 43.14-72.144 57.5-274.865 57.5-274.865s-240.68-162.109-372-182.135c-71.97-10.974-238.58 5.593-303 39.5-92.72 48.802-142 215-142 215s63.33 121 39 242-197 360.505-197 360.505l-330 48.5-260.5 82s81.464 58.25 139.5 84.5zm1163-784.505s-99.13-11.727-136-33c-35.88-20.701-112.5-90.5-112.5-90.5l112.5-21.5 136 145z"
                    fill="url(#paint0_linear_702_14)" //TODO: body color
                />
                <Path
                    d="M1524.5 418.865c36.87 21.273 136 33 136 33l-136-145-112.5 21.5s76.62 69.799 112.5 90.5z"
                    fill={color.eye} // TODO: eye color
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M497.5 1236.37c124.457 56.27 345 57.5 345 57.5s319.16 23.19 445.5-103c103.64-103.52 28.19-243.203 124-354.005 102.47-118.505 373.59-81.042 454-215.5 43.14-72.144 57.5-274.865 57.5-274.865s-240.68-162.109-372-182.135c-71.97-10.974-238.58 5.593-303 39.5-92.72 48.802-142 215-142 215s63.33 121 39 242-197 360.505-197 360.505l-330 48.5-260.5 82s81.464 58.25 139.5 84.5zm1163-784.505s-99.13-11.727-136-33c-35.88-20.701-112.5-90.5-112.5-90.5l112.5-21.5 136 145z"
                    stroke="#000"
                />
                <Path
                    d="M1524.5 418.865c36.87 21.273 136 33 136 33l-136-145-112.5 21.5s76.62 69.799 112.5 90.5z"
                    stroke="#000"
                />
                <Path
                    d="M1532 344.5l-11.5 22V395l14.5-23.5-3-27z"
                    fill="red"
                    stroke="#000"
                />
                <G>
                    <Path
                        d="M1145.49 652.5l-106-109L899.994 277l-266.5-161L300.496 1h-245.5l214.999 115 333 115 266.5 161 139.495 266.5 106 100 30.5-106z"
                        fill={color.backWing} //TODO: BackWing color
                    />
                    <Path
                        d="M1114.99 758.5l-106-100L869.495 392l-266.5-161-333-115h-245.5l275.5 166.5 179 254.5 184.5 263.5 188 73 142 145 90.995-145 30.5-115z"
                        fill="url(#paint1_linear_702_14)" //TODO: FrontWing color
                    />
                    <Path
                        d="M269.995 116L54.996 1h245.5l332.998 115 266.5 161 139.496 266.5 106 109-30.5 106M269.995 116l333 115 266.5 161 139.495 266.5 106 100M269.995 116h-245.5l275.5 166.5 179 254.5 184.5 263.5 188 73 142 145 90.995-145 30.5-115"
                        stroke="#000"
                    />
                </G>
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_702_14"
                    x1={1582}
                    y1={231.366}
                    x2={946}
                    y2={1360.87}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor={color.body.start} />
                    <Stop
                        offset={0.192708}
                        stopColor={color.body.mid}//"#FF3C2E"
                        stopOpacity={0.973938}
                    />
                    <Stop offset={1} stopColor={color.body.end} stopOpacity={0.94} />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_702_14"
                    x1={942.5}
                    y1={510}
                    x2={464}
                    y2={716}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor={color.frontWing.start} />
                    <Stop offset={1} stopColor={color.frontWing.end} />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}

export default SvgComponent;
