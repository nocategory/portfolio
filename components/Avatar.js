import { dark } from '@components/constants'

const Avatar = () => (
  <>
    <svg>
      <g transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)">
        <path
          d="M0 2000 l0 -2000 2000 0 2000 0 0 2000 0 2000 -2000 0 -2000 0 0
-2000z m1134 1389 c9 -8   -23 -230 -39 -270 -4 -11 0 -15 17 -15 29 1 56 -49
40 -75 -16 -25 15 -35 39 -13 10 9 27 14 38 11 14 -3 21 1 25 17 10 36 6 89
-8 138 -13 40 -13 48 0 59 11 9 17 9 29 -1 13 -11 18 -10 31 8 21 30 39 28 95
-13 109 -78 236 -163 269 -180 19 -9 58 -35 86 -56 28 -22 54 -39 58 -39 5 0
5 72 1 160 l-8 160 37 0 36 0 0 -232 c0 -240 6 -320 21 -296 5 7 9 22 9 34 0
33 23 57 48 50 19 -6 20 -12 15 -57 -6 -52 -4 -55 29 -38 33 18 48 -8 59 -107
6 -49 14 -111 18 -139 l7 -50 8 35 c5 19 17 54 27 76 40 89 44 123 26 235 -9
58 -19 112 -23 122 -5 14 0 17 32 17 66 0 67 -2 68 -164 1 -126 3 -145 16
-140 8 4 56 22 105 39 l90 32 6 117 c7 133 15 151 64 137 27 -7 30 -12 30 -47
0 -21 -4 -61 -8 -89 l-7 -50 35 73 c24 50 58 97 110 152 41 43 75 84 75 90 0
6 -7 59 -16 116 -17 104 -16 106 4 126 24 25 39 18 46 -22 3 -17 9 -44 12 -61
4 -22 9 -28 14 -18 7 10 14 10 35 1 50 -23 45 -50 -36 -178 -27 -43 -65 -91
-84 -107 -31 -25 -85 -96 -85 -112 0 -6 100 52 121 71 8 8 21 14 27 14 16 0
43 -55 36 -74 -3 -8 -45 -35 -94 -60 -48 -25 -101 -61 -118 -80 -25 -29 -72
-132 -97 -216 -9 -30 83 97 114 158 23 44 43 52 75 29 17 -13 17 -16 -7 -63
-23 -45 -69 -110 -143 -204 -17 -21 -20 -28 -8 -17 11 9 82 59 157 110 146
100 196 152 197 203 0 40 27 128 56 187 19 36 30 47 48 47 53 0 53 -49 2 -111
-21 -24 -43 -95 -34 -105 8 -7 164 123 282 234 114 108 150 129 162 97 11 -29
-6 -60 -53 -95 -26 -19 -80 -66 -119 -104 -40 -37 -91 -81 -113 -95 -59 -39
-252 -215 -240 -219 5 -2 52 8 104 23 52 15 102 25 112 23 22 -4 29 -34 13
-53 -17 -20 -144 -56 -232 -65 -87 -8 -97 -13 -78 -35 30 -37 -43 -85 -131
-85 -23 0 -56 -13 -95 -36 -32 -20 -71 -44 -86 -53 -14 -8 -33 -29 -42 -46
-12 -24 -15 -26 -15 -10 -2 51 -23 95 -51 110 -37 19 -37 30 -4 88 25 45 79
226 70 235 -3 2 -62 -19 -133 -46 -151 -60 -144 -50 -164 -241 l-13 -122 45
-45 44 -45 30 65 30 65 48 -45 49 -44 -27 -47 c-15 -27 -39 -63 -52 -81 -14
-18 -23 -35 -21 -38 3 -2 34 -7 69 -10 91 -9 94 -12 93 -80 l-1 -59 -104 -13
c-101 -12 -153 -31 -170 -62 -5 -8 -29 -51 -55 -95 -42 -73 -80 -163 -72 -170
6 -6 165 87 235 138 164 120 163 119 163 153 0 40 19 56 62 52 26 -2 33 -7 32
-24 0 -22 0 -22 38 3 21 14 38 27 38 29 0 2 -15 3 -32 2 -30 -3 -33 0 -36 27
-5 52 13 64 113 74 50 5 99 13 110 17 30 11 152 92 225 149 93 74 129 118 178
218 24 48 48 87 52 87 17 0 49 -51 43 -68 -4 -9 -35 -59 -69 -111 -63 -95
-142 -169 -244 -229 l-45 -27 53 -3 c47 -3 60 1 110 35 31 20 92 67 135 103
78 65 222 159 244 160 6 0 21 -12 32 -26 27 -35 24 -38 -115 -125 -62 -38
-116 -74 -119 -79 -3 -5 -37 -26 -75 -47 -70 -37 -70 -37 -45 -50 32 -17 32
-34 0 -71 -15 -17 -25 -42 -25 -60 0 -30 -14 -42 -47 -42 -9 0 -42 -24 -73
-54 l-57 -54 80 -12 c99 -16 202 -8 327 25 131 34 130 34 130 -20 0 -52 14
-48 -210 -66 -108 -8 -165 -8 -223 0 -165 23 -234 9 -559 -113 -53 -20 -143
-48 -200 -62 -176 -44 -328 -128 -328 -181 0 -8 -15 -35 -32 -60 -29 -40 -33
-52 -32 -107 1 -33 9 -81 19 -106 9 -25 28 -85 42 -135 14 -49 41 -142 60
-205 20 -63 38 -132 41 -153 l5 -38 -78 3 -78 3 -22 70 c-86 272 -115 378
-130 474 -7 47 -19 111 -26 142 -12 56 -12 56 28 135 23 43 60 110 82 149 23
38 41 74 41 80 0 5 18 46 40 90 22 44 55 125 75 180 19 55 40 108 45 118 6 9
13 51 17 91 l6 75 -64 40 c-35 23 -69 41 -75 41 -26 0 -92 60 -99 89 -6 29
-10 31 -51 31 -36 0 -71 -14 -177 -70 -112 -58 -138 -77 -168 -118 -37 -49
-126 -130 -165 -150 -27 -14 -84 5 -84 28 0 9 41 46 91 84 50 37 88 70 86 72
-2 3 -26 -1 -53 -7 -27 -6 -89 -12 -139 -12 -87 -1 -94 1 -210 51 -244 107
-242 106 -250 152 -9 56 6 74 60 66 108 -15 193 -63 224 -125 31 -60 79 -75
228 -69 112 4 123 6 218 47 55 24 121 54 148 69 l47 25 -67 37 -68 38 -18 -22
c-10 -11 -36 -45 -58 -73 -46 -61 -79 -86 -103 -77 -34 13 -12 62 68 150 25
29 46 54 46 57 0 3 -17 8 -37 12 -63 11 -76 23 -70 58 3 18 8 39 12 48 8 20
-40 42 -81 37 -24 -2 -29 -8 -32 -35 -2 -18 1 -41 7 -51 10 -18 4 -21 -82 -41
-130 -30 -165 -28 -180 11 -9 24 10 35 96 54 42 9 77 20 77 23 0 10 -182 51
-225 51 -22 0 -91 -11 -153 -25 -78 -18 -135 -25 -185 -23 l-72 3 -3 34 c-2
18 2 39 8 45 7 7 49 10 118 8 59 -2 130 2 157 8 66 16 189 16 245 1 25 -7 54
-15 65 -17 28 -8 -111 125 -179 170 -31 20 -56 40 -56 44 0 15 31 52 43 52 12
0 59 -41 169 -145 40 -39 53 -45 89 -45 23 0 61 -10 84 -21 42 -21 95 -21 95
1 0 5 -19 24 -41 42 -82 65 -140 121 -161 157 -12 20 -41 58 -66 84 -33 37
-43 54 -39 73 3 20 1 23 -18 18 -14 -3 -47 9 -96 35 -59 32 -91 42 -160 51
-148 18 -229 52 -229 95 0 25 32 33 92 24 66 -11 309 -94 384 -132 l52 -26 4
127 c3 70 10 139 16 155 10 23 16 27 39 21 16 -4 32 -10 37 -15z"
        />
        <path
          d="M1317 3173 c13 -47 6 -128 -15 -176 l-20 -45 21 -34 c11 -18 34 -61
51 -94 35 -70 93 -137 154 -177 43 -28 47 -37 33 -72 -14 -33 14 -75 49 -75
39 0 76 48 53 69 -11 10 -14 26 -10 56 6 38 3 45 -24 71 -72 68 -84 114 -30
114 21 0 38 -13 74 -57 45 -56 63 -92 86 -179 6 -23 20 -53 31 -67 22 -28 111
-82 105 -63 -2 6 -16 50 -30 99 -26 88 -52 128 -139 213 -31 30 -120 157 -132
187 -7 19 37 50 57 41 8 -3 47 -57 88 -119 40 -62 84 -124 97 -136 l24 -23 -6
35 c-26 147 -69 197 -248 289 -60 30 -154 88 -234 142 l-43 30 8 -29z"
        />
        <path
          d="M1052 3049 c-15 -23 -6 -43 33 -79 15 -14 39 -43 52 -65 31 -49 68
-90 107 -118 29 -21 28 -10 -2 25 -15 18 -9 38 13 38 7 0 27 -12 44 -26 17
-14 31 -23 31 -19 0 4 -18 37 -41 75 -27 45 -39 76 -35 88 8 24 -30 38 -54 19
-8 -7 -25 -18 -38 -25 -30 -17 -47 -4 -77 60 -20 42 -22 45 -33 27z"
        />
        <path
          d="M2685 2970 c-42 -42 -75 -90 -110 -158 -33 -64 -57 -98 -69 -101 -18
-3 -19 2 -13 70 4 41 9 89 13 107 5 25 3 32 -8 32 -20 0 -28 -42 -28 -146 0
-73 -3 -85 -21 -98 l-21 -14 23 -4 c20 -2 24 -9 23 -38 -1 -48 -41 -186 -67
-235 l-22 -40 38 -38 38 -38 46 28 c25 15 58 36 73 46 16 10 57 22 92 28 79
12 98 18 98 30 0 5 -9 9 -19 9 -54 0 -25 50 41 69 27 9 37 15 29 21 -10 6 -10
12 -1 29 7 14 -41 -14 -127 -74 -76 -52 -155 -104 -175 -115 -65 -35 -100 -21
-60 23 9 11 11 17 4 13 -27 -16 -21 26 24 145 26 68 52 136 60 150 20 41 88
96 164 134 39 20 70 42 70 50 0 8 -2 15 -5 15 -9 0 -110 -63 -132 -83 -27 -24
-59 -19 -55 8 7 41 46 102 103 162 52 54 67 73 56 73 -1 0 -29 -27 -62 -60z"
        />
        <path
          d="M1346 2742 c-3 -6 -14 -8 -22 -5 -9 3 -4 -6 11 -21 25 -25 26 -29 12
-49 -8 -12 -31 -26 -52 -32 -32 -8 -43 -6 -77 14 l-39 22 16 -25 c10 -14 13
-27 9 -27 -5 -1 14 -5 41 -10 46 -7 127 -22 182 -34 12 -3 36 -17 54 -32 32
-28 33 -28 26 -4 -3 13 -2 34 3 47 8 21 5 26 -23 40 -18 9 -55 41 -83 72 -32
36 -53 52 -58 44z"
        />
        <path
          d="M1866 2676 c-3 -14 -11 -26 -17 -26 -6 0 -6 -6 -1 -17 9 -17 72 -227
72 -238 0 -15 -46 -1 -93 29 -61 39 -104 86 -113 122 -6 23 -7 22 -36 -20 -34
-52 -42 -56 -123 -55 -43 1 -80 9 -133 31 -40 17 -74 29 -76 27 -3 -2 -7 -16
-11 -31 -6 -25 -5 -27 40 -34 26 -3 56 -15 66 -25 11 -11 23 -19 28 -19 19 0
181 -92 181 -104 0 -16 -85 -65 -193 -113 -48 -21 -81 -39 -73 -41 9 -2 16 -7
16 -12 0 -25 -20 -46 -106 -111 -52 -39 -94 -73 -94 -75 0 -2 9 -4 19 -4 26 0
124 84 171 146 34 45 58 61 175 123 123 64 141 71 194 71 l58 0 17 -44 c14
-38 26 -49 74 -73 87 -45 140 -81 152 -102 18 -35 12 -127 -15 -193 -13 -35
-38 -101 -55 -148 -17 -47 -42 -105 -55 -130 -13 -25 -34 -73 -48 -107 -14
-35 -34 -75 -45 -90 -11 -16 -41 -68 -66 -116 l-47 -88 21 -117 c24 -133 61
-283 96 -390 13 -40 24 -78 24 -86 0 -8 10 -39 21 -70 l22 -56 48 0 c27 0 49
2 49 4 0 2 -10 35 -21 72 -12 38 -41 137 -65 219 -23 83 -52 182 -64 220 -27
90 -23 147 16 206 16 24 40 66 54 93 23 46 31 53 116 93 50 23 133 54 185 67
52 14 153 45 224 70 71 25 132 46 135 46 3 0 -2 5 -12 10 -12 7 -34 2 -80 -19
-36 -16 -80 -32 -99 -36 -19 -3 -74 -18 -122 -32 -68 -19 -92 -22 -100 -13
-15 14 14 39 93 82 30 16 85 50 121 76 37 26 100 70 141 99 82 56 112 83 104
90 -3 3 -33 -15 -67 -41 -33 -25 -70 -46 -80 -46 -27 0 -90 -33 -114 -60 -24
-27 -147 -111 -235 -160 -36 -20 -80 -45 -98 -56 -27 -16 -34 -17 -41 -5 -19
30 98 278 164 347 32 32 78 47 188 59 l57 6 0 40 0 39 -42 0 c-34 -1 -39 -3
-25 -11 22 -13 22 -36 -2 -48 -10 -6 -48 -13 -85 -17 -60 -6 -66 -5 -66 12 0
22 48 74 69 75 11 0 12 2 4 6 -23 9 -14 37 32 107 25 38 45 72 45 76 0 3 -11
17 -24 29 l-24 23 -20 -53 c-31 -84 -43 -85 -111 -11 l-59 63 15 122 c16 146
28 192 53 217 14 14 17 26 12 40 -6 17 -12 8 -34 -48 -15 -38 -32 -99 -39
-136 -11 -64 -13 -68 -35 -63 -20 3 -24 0 -24 -19 0 -38 -19 -38 -59 3 -47 46
-61 92 -61 197 0 59 -4 82 -15 90 -9 6 -22 29 -29 50 -13 37 -13 38 -20 12z"
        />
        <path
          d="M716 2332 c-11 -18 8 -53 39 -72 18 -11 57 -29 86 -39 30 -11 88 -35
129 -54 83 -38 148 -49 230 -37 50 6 45 7 -45 9 -125 1 -177 23 -213 88 -18
34 -36 48 -85 72 -66 32 -132 47 -141 33z"
        />
        <path
          d="M2688 1882 c-21 -4 -25 -52 -5 -52 7 0 22 -6 32 -14 18 -13 15 -18
-42 -103 l-60 -89 76 27 c112 40 165 64 180 83 8 10 27 24 43 32 15 8 28 19
28 24 0 5 -21 21 -47 36 -27 15 -57 36 -69 46 -18 16 -25 17 -48 7 -18 -8 -33
-9 -48 -3 -13 6 -31 8 -40 6z"
        />
        <path
          d="M2545 1720 c-74 -54 -150 -107 -218 -153 -23 -16 -33 -26 -22 -23 11
3 43 10 70 16 28 6 69 20 92 30 24 11 46 20 51 20 12 0 45 48 76 108 14 29 25
52 24 52 -2 0 -34 -23 -73 -50z"
        />
      </g>
    </svg>

    <style jsx>{`
      svg {
        background: #fff;
        opacity: 0.8;
        width: 400px;
        height: 400px;
      }
      svg g {
        fill: ${dark};
      }
    `}</style>
  </>
)

export default Avatar
