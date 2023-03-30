import {FC} from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

type Props = {
}

function SvgComponent<FC>(props: Props) {
  return (
    <Svg
      width={100}
      height={80}
      viewBox="0 0 1657 1137"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M141 1076.5c124.457 56.28 345 57.5 345 57.5s319.163 23.2 445.5-103c103.64-103.52 28.189-243.198 124-354 102.47-118.506 280.09-41.542 360.5-176 43.14-72.145 239.5-242 239.5-242S1326.32 24.526 1195 4.5C1123.03-6.475 956.419 10.093 892 44c-92.716 48.802-142 215-142 215s63.333 121 39 242-197 360.5-197 360.5L262 910 1.5 992s81.465 58.26 139.5 84.5zM1304 292s-99.13-11.727-136-33c-35.88-20.701-112.5-90.5-112.5-90.5L1168 147l136 145z"
        fill="url(#paint0_linear_702_9)"
      />
      <Path
        d="M1168 259c36.87 21.273 136 33 136 33l-136-145-112.5 21.5s76.62 69.799 112.5 90.5z"
        fill="#FAFF00"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M141 1076.5c124.457 56.28 345 57.5 345 57.5s319.163 23.2 445.5-103c103.64-103.52 28.189-243.198 124-354 102.47-118.506 280.09-41.542 360.5-176 43.14-72.145 239.5-242 239.5-242S1326.32 24.526 1195 4.5C1123.03-6.475 956.419 10.093 892 44c-92.716 48.802-142 215-142 215s63.333 121 39 242-197 360.5-197 360.5L262 910 1.5 992s81.465 58.26 139.5 84.5zM1304 292s-99.13-11.727-136-33c-35.88-20.701-112.5-90.5-112.5-90.5L1168 147l136 145z"
        stroke="#000"
      />
      <Path
        d="M1168 259c36.87 21.273 136 33 136 33l-136-145-112.5 21.5s76.62 69.799 112.5 90.5z"
        stroke="#000"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_702_9"
          x1={1225.5}
          y1={71.4999}
          x2={589.5}
          y2={1201}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E74949" />
          <Stop offset={0.0898694} stopColor="#E75449" stopOpacity={0.973938} />
          <Stop offset={1} stopColor="#FCA92C" stopOpacity={0.94} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
