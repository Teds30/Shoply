import { Fragment } from "react";

const Cod = (props) => {
    return (
        <Fragment>
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width={`${props.width}pt` || "512.000000pt"}
                height={`${props.height}pt` || "512.000000pt"}
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
            >
                <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill={props.fill || "#000000"}
                    stroke="none"
                >
                    <path
                        d="M1464 5023 c-1071 -615 -1437 -830 -1450 -855 -21 -40 -21 -1856 0
-1896 11 -20 106 -80 360 -226 l346 -199 0 -883 c0 -663 3 -890 12 -909 27
-59 -119 -55 2188 -55 2307 0 2161 -4 2188 55 9 20 12 299 12 1146 0 1217 3
1161 -55 1187 -19 9 -240 12 -885 12 l-860 0 -2 880 -3 880 -25 24 c-19 20
-1461 859 -1582 922 -15 8 -38 14 -50 14 -13 0 -100 -44 -194 -97z m489 -288
c152 -88 277 -162 277 -165 0 -9 -1334 -775 -1350 -775 -17 0 -570 315 -570
325 0 10 1335 779 1350 777 9 -1 140 -74 293 -162z m780 -450 c152 -88 277
-162 277 -165 0 -3 -59 -39 -131 -80 -130 -75 -159 -102 -159 -149 0 -53 48
-101 102 -101 12 0 81 34 154 75 73 41 135 75 138 75 3 0 6 -346 6 -770 l0
-770 -680 0 -680 0 0 383 1 382 173 99 c178 101 206 126 206 181 0 37 -59 95
-97 95 -18 0 -93 -37 -203 -100 -96 -55 -180 -99 -186 -98 -19 5 -564 322
-564 328 0 3 147 91 328 195 180 104 428 247 552 319 124 71 277 160 340 197
63 37 122 67 130 66 9 -1 140 -74 293 -162z m-1848 -733 l670 -387 3 -383 2
-382 -380 0 c-403 0 -425 -2 -446 -47 -5 -10 -11 -75 -14 -145 l-5 -127 -257
147 -257 147 -1 783 c0 430 3 782 8 782 4 -1 308 -175 677 -388z m4035 -2352
l0 -1000 -2000 0 -2000 0 0 1000 0 1000 2000 0 2000 0 0 -1000z"
                    />
                    <path
                        d="M2359 3731 c-21 -22 -29 -39 -29 -66 0 -112 175 -131 196 -21 7 38
-15 89 -45 106 -39 20 -91 12 -122 -19z"
                    />
                    <path
                        d="M1569 1985 c-30 -16 -45 -49 -53 -118 -17 -140 -123 -246 -261 -263
-72 -8 -104 -23 -120 -55 -22 -41 -22 -657 0 -698 16 -32 48 -47 118 -55 140
-17 246 -123 263 -261 8 -72 23 -104 55 -120 42 -22 2656 -22 2698 0 32 16 47
48 55 118 17 140 123 246 261 263 28 3 63 10 78 16 55 21 57 37 57 388 0 351
-2 367 -57 388 -15 6 -50 13 -78 16 -138 17 -244 123 -261 263 -8 70 -23 102
-55 118 -42 22 -2660 22 -2700 0z m2577 -241 c45 -145 172 -270 322 -319 l52
-17 0 -208 0 -208 -52 -17 c-149 -48 -277 -174 -322 -319 l-18 -56 -1208 0
-1208 0 -18 56 c-45 145 -173 271 -321 319 l-53 17 0 208 0 208 56 18 c145 45
270 172 319 322 l17 52 1208 0 1208 0 18 -56z"
                    />
                    <path
                        d="M2871 1736 c-31 -17 -50 -53 -51 -96 -1 -29 -8 -40 -44 -67 -94 -69
-125 -211 -70 -321 32 -65 69 -96 164 -139 41 -19 78 -40 82 -46 14 -22 8 -64
-10 -80 -23 -21 -45 -21 -99 -1 -76 29 -143 -11 -143 -84 0 -49 27 -84 80
-106 31 -12 40 -21 40 -40 0 -39 21 -76 51 -92 74 -38 148 11 149 99 1 26 9
38 44 64 94 69 125 211 70 321 -32 65 -69 96 -164 139 -41 19 -78 40 -82 46
-14 22 -8 64 10 80 23 21 45 21 99 1 76 -29 143 11 143 84 0 49 -27 84 -80
106 -31 12 -40 21 -40 40 0 80 -81 130 -149 92z"
                    />
                </g>
            </svg>
        </Fragment>
    );
};

export default Cod;
