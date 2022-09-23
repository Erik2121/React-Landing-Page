import React from "react";
import "./css/footer.scss";
function Footer() {
  return (
    <footer className="container-sm d-flex justify-content-between">
      <div className="footer-left-side">
        <svg
          width="149"
          height="38"
          viewBox="0 0 149 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.04 25.8916C46.9067 25.8916 46.7933 25.8449 46.7 25.7516C46.6067 25.6583 46.56 25.5449 46.56 25.4116V12.3716C46.56 12.2249 46.6067 12.1116 46.7 12.0316C46.7933 11.9383 46.9067 11.8916 47.04 11.8916H48.92C49.0667 11.8916 49.18 11.9383 49.26 12.0316C49.3533 12.1116 49.4 12.2249 49.4 12.3716V23.4916H55.74C55.8867 23.4916 56.0067 23.5383 56.1 23.6316C56.1933 23.7249 56.24 23.8383 56.24 23.9716V25.4116C56.24 25.5449 56.1933 25.6583 56.1 25.7516C56.0067 25.8449 55.8867 25.8916 55.74 25.8916H47.04ZM60.9611 26.0916C60.2811 26.0916 59.6544 25.9583 59.0811 25.6916C58.5211 25.4116 58.0744 25.0383 57.7411 24.5716C57.4211 24.1049 57.2611 23.5916 57.2611 23.0316C57.2611 22.1249 57.6278 21.3916 58.3611 20.8316C59.0944 20.2716 60.1011 19.8916 61.3811 19.6916L64.1211 19.2916V18.8716C64.1211 18.2983 63.9744 17.8649 63.6811 17.5716C63.3878 17.2783 62.9211 17.1316 62.2811 17.1316C61.8411 17.1316 61.4878 17.2116 61.2211 17.3716C60.9544 17.5316 60.7344 17.6983 60.5611 17.8716C60.4011 18.0316 60.2944 18.1383 60.2411 18.1916C60.1878 18.3516 60.0878 18.4316 59.9411 18.4316H58.3811C58.2611 18.4316 58.1544 18.3916 58.0611 18.3116C57.9811 18.2316 57.9411 18.1249 57.9411 17.9916C57.9544 17.6583 58.1144 17.2849 58.4211 16.8716C58.7411 16.4449 59.2278 16.0783 59.8811 15.7716C60.5344 15.4516 61.3411 15.2916 62.3011 15.2916C63.8744 15.2916 65.0211 15.6449 65.7411 16.3516C66.4611 17.0583 66.8211 17.9849 66.8211 19.1316V25.4116C66.8211 25.5449 66.7744 25.6583 66.6811 25.7516C66.6011 25.8449 66.4878 25.8916 66.3411 25.8916H64.6811C64.5478 25.8916 64.4344 25.8449 64.3411 25.7516C64.2478 25.6583 64.2011 25.5449 64.2011 25.4116V24.6316C63.9078 25.0583 63.4944 25.4116 62.9611 25.6916C62.4278 25.9583 61.7611 26.0916 60.9611 26.0916ZM61.6411 24.1716C62.3744 24.1716 62.9744 23.9316 63.4411 23.4516C63.9078 22.9716 64.1411 22.2783 64.1411 21.3716V20.9716L62.1411 21.2916C60.6078 21.5316 59.8411 22.0449 59.8411 22.8316C59.8411 23.2583 60.0144 23.5916 60.3611 23.8316C60.7211 24.0583 61.1478 24.1716 61.6411 24.1716ZM73.3464 26.0916C72.3331 26.0916 71.4864 25.9383 70.8064 25.6316C70.1264 25.3249 69.6197 24.9716 69.2864 24.5716C68.9664 24.1583 68.8064 23.8049 68.8064 23.5116C68.8064 23.3783 68.8464 23.2716 68.9264 23.1916C69.0197 23.1116 69.1264 23.0716 69.2464 23.0716H70.8864C70.9931 23.0716 71.0864 23.1249 71.1664 23.2316C71.2331 23.2849 71.3797 23.4116 71.6064 23.6116C71.8464 23.8116 72.1131 23.9716 72.4064 24.0916C72.7131 24.1983 73.0464 24.2516 73.4064 24.2516C73.9397 24.2516 74.3731 24.1516 74.7064 23.9516C75.0397 23.7383 75.2064 23.4383 75.2064 23.0516C75.2064 22.7849 75.1264 22.5716 74.9664 22.4116C74.8197 22.2383 74.5464 22.0849 74.1464 21.9516C73.7597 21.8049 73.1731 21.6449 72.3864 21.4716C71.2531 21.2316 70.4131 20.8649 69.8664 20.3716C69.3331 19.8783 69.0664 19.2249 69.0664 18.4116C69.0664 17.8783 69.2264 17.3783 69.5464 16.9116C69.8664 16.4316 70.3397 16.0449 70.9664 15.7516C71.6064 15.4449 72.3664 15.2916 73.2464 15.2916C74.1531 15.2916 74.9331 15.4383 75.5864 15.7316C76.2397 16.0116 76.7331 16.3516 77.0664 16.7516C77.4131 17.1516 77.5864 17.5049 77.5864 17.8116C77.5864 17.9316 77.5397 18.0383 77.4464 18.1316C77.3664 18.2116 77.2664 18.2516 77.1464 18.2516H75.6464C75.4997 18.2516 75.3864 18.1983 75.3064 18.0916C75.2131 18.0249 75.0597 17.9049 74.8464 17.7316C74.6464 17.5449 74.4197 17.3983 74.1664 17.2916C73.9131 17.1849 73.6064 17.1316 73.2464 17.1316C72.7531 17.1316 72.3731 17.2383 72.1064 17.4516C71.8397 17.6649 71.7064 17.9449 71.7064 18.2916C71.7064 18.5316 71.7664 18.7316 71.8864 18.8916C72.0197 19.0516 72.2797 19.2049 72.6664 19.3516C73.0531 19.4849 73.6331 19.6249 74.4064 19.7716C76.8064 20.2383 78.0064 21.2849 78.0064 22.9116C78.0064 23.8583 77.5931 24.6249 76.7664 25.2116C75.9531 25.7983 74.8131 26.0916 73.3464 26.0916ZM80.5505 25.8916C80.4171 25.8916 80.3038 25.8449 80.2105 25.7516C80.1171 25.6583 80.0705 25.5449 80.0705 25.4116V12.1716C80.0705 12.0249 80.1171 11.9116 80.2105 11.8316C80.3038 11.7383 80.4171 11.6916 80.5505 11.6916H82.2305C82.3771 11.6916 82.4905 11.7383 82.5705 11.8316C82.6638 11.9116 82.7105 12.0249 82.7105 12.1716V25.4116C82.7105 25.5449 82.6638 25.6583 82.5705 25.7516C82.4905 25.8449 82.3771 25.8916 82.2305 25.8916H80.5505ZM89.863 26.0916C88.3696 26.0916 87.183 25.6649 86.303 24.8116C85.4363 23.9583 84.9763 22.7449 84.923 21.1716L84.903 20.6716C84.903 19.0049 85.3363 17.6916 86.203 16.7316C87.083 15.7716 88.2963 15.2916 89.843 15.2916C91.4296 15.2916 92.6496 15.7716 93.503 16.7316C94.3696 17.6916 94.803 18.9716 94.803 20.5716V20.9916C94.803 21.1249 94.7563 21.2383 94.663 21.3316C94.5696 21.4249 94.4496 21.4716 94.303 21.4716H87.663V21.6316C87.6896 22.3783 87.8896 22.9983 88.263 23.4916C88.6496 23.9716 89.1763 24.2116 89.843 24.2116C90.603 24.2116 91.223 23.9049 91.703 23.2916C91.823 23.1449 91.9163 23.0583 91.983 23.0316C92.0496 22.9916 92.163 22.9716 92.323 22.9716H94.083C94.203 22.9716 94.303 23.0049 94.383 23.0716C94.4763 23.1383 94.523 23.2316 94.523 23.3516C94.523 23.6716 94.3296 24.0516 93.943 24.4916C93.5696 24.9183 93.0296 25.2916 92.323 25.6116C91.6163 25.9316 90.7963 26.0916 89.863 26.0916ZM92.043 19.7716V19.7316C92.043 18.9449 91.843 18.3183 91.443 17.8516C91.0563 17.3716 90.523 17.1316 89.843 17.1316C89.163 17.1316 88.6296 17.3716 88.243 17.8516C87.8563 18.3183 87.663 18.9449 87.663 19.7316V19.7716H92.043ZM100.885 26.0916C99.8721 26.0916 99.0255 25.9383 98.3455 25.6316C97.6655 25.3249 97.1588 24.9716 96.8255 24.5716C96.5055 24.1583 96.3455 23.8049 96.3455 23.5116C96.3455 23.3783 96.3855 23.2716 96.4655 23.1916C96.5588 23.1116 96.6655 23.0716 96.7855 23.0716H98.4255C98.5321 23.0716 98.6255 23.1249 98.7055 23.2316C98.7721 23.2849 98.9188 23.4116 99.1455 23.6116C99.3855 23.8116 99.6521 23.9716 99.9455 24.0916C100.252 24.1983 100.585 24.2516 100.945 24.2516C101.479 24.2516 101.912 24.1516 102.245 23.9516C102.579 23.7383 102.745 23.4383 102.745 23.0516C102.745 22.7849 102.665 22.5716 102.505 22.4116C102.359 22.2383 102.085 22.0849 101.685 21.9516C101.299 21.8049 100.712 21.6449 99.9255 21.4716C98.7921 21.2316 97.9521 20.8649 97.4055 20.3716C96.8721 19.8783 96.6055 19.2249 96.6055 18.4116C96.6055 17.8783 96.7655 17.3783 97.0855 16.9116C97.4055 16.4316 97.8788 16.0449 98.5055 15.7516C99.1455 15.4449 99.9055 15.2916 100.785 15.2916C101.692 15.2916 102.472 15.4383 103.125 15.7316C103.779 16.0116 104.272 16.3516 104.605 16.7516C104.952 17.1516 105.125 17.5049 105.125 17.8116C105.125 17.9316 105.079 18.0383 104.985 18.1316C104.905 18.2116 104.805 18.2516 104.685 18.2516H103.185C103.039 18.2516 102.925 18.1983 102.845 18.0916C102.752 18.0249 102.599 17.9049 102.385 17.7316C102.185 17.5449 101.959 17.3983 101.705 17.2916C101.452 17.1849 101.145 17.1316 100.785 17.1316C100.292 17.1316 99.9121 17.2383 99.6455 17.4516C99.3788 17.6649 99.2455 17.9449 99.2455 18.2916C99.2455 18.5316 99.3055 18.7316 99.4255 18.8916C99.5588 19.0516 99.8188 19.2049 100.205 19.3516C100.592 19.4849 101.172 19.6249 101.945 19.7716C104.345 20.2383 105.545 21.2849 105.545 22.9116C105.545 23.8583 105.132 24.6249 104.305 25.2116C103.492 25.7983 102.352 26.0916 100.885 26.0916ZM111.63 25.8916C111.403 25.8916 111.216 25.8383 111.07 25.7316C110.936 25.6116 110.843 25.4649 110.79 25.2916L106.75 12.4916L106.71 12.3116C106.71 12.2049 106.75 12.1116 106.83 12.0316C106.923 11.9383 107.03 11.8916 107.15 11.8916H109.77C109.97 11.8916 110.13 11.9516 110.25 12.0716C110.383 12.1783 110.47 12.2983 110.51 12.4316L113.23 21.4716L115.97 12.4316C116.01 12.2849 116.09 12.1583 116.21 12.0516C116.343 11.9449 116.51 11.8916 116.71 11.8916H119.33C119.45 11.8916 119.55 11.9383 119.63 12.0316C119.71 12.1116 119.75 12.2049 119.75 12.3116C119.75 12.3783 119.743 12.4383 119.73 12.4916L115.67 25.2916C115.63 25.4649 115.536 25.6116 115.39 25.7316C115.256 25.8383 115.076 25.8916 114.85 25.8916H111.63ZM122.075 25.8916C121.942 25.8916 121.822 25.8449 121.715 25.7516C121.622 25.6449 121.575 25.5249 121.575 25.3916V12.4116C121.575 12.2649 121.622 12.1449 121.715 12.0516C121.808 11.9449 121.928 11.8916 122.075 11.8916H127.735C129.468 11.8916 130.828 12.2849 131.815 13.0716C132.802 13.8583 133.295 15.0116 133.295 16.5316C133.295 18.0516 132.802 19.1916 131.815 19.9516C130.828 20.6983 129.468 21.0716 127.735 21.0716H125.455V25.3916C125.455 25.5249 125.408 25.6449 125.315 25.7516C125.222 25.8449 125.102 25.8916 124.955 25.8916H122.075ZM127.635 18.2116C128.182 18.2116 128.608 18.0716 128.915 17.7916C129.235 17.4983 129.395 17.0716 129.395 16.5116C129.395 15.9916 129.248 15.5716 128.955 15.2516C128.675 14.9316 128.235 14.7716 127.635 14.7716H125.395V18.2116H127.635ZM135.649 25.8916C135.516 25.8916 135.396 25.8449 135.289 25.7516C135.196 25.6449 135.149 25.5249 135.149 25.3916V12.4116C135.149 12.2649 135.196 12.1449 135.289 12.0516C135.382 11.9449 135.502 11.8916 135.649 11.8916H137.909C138.216 11.8916 138.442 12.0183 138.589 12.2716L143.309 19.7316V12.4116C143.309 12.2649 143.356 12.1449 143.449 12.0516C143.542 11.9449 143.662 11.8916 143.809 11.8916H146.349C146.496 11.8916 146.616 11.9449 146.709 12.0516C146.802 12.1449 146.849 12.2649 146.849 12.4116V25.3716C146.849 25.5183 146.802 25.6449 146.709 25.7516C146.616 25.8449 146.496 25.8916 146.349 25.8916H144.089C143.782 25.8916 143.556 25.7649 143.409 25.5116L138.709 18.3516V25.3916C138.709 25.5383 138.656 25.6583 138.549 25.7516C138.456 25.8449 138.336 25.8916 138.189 25.8916H135.649Z"
            fill="#0B132A"
          />
          <path
            d="M31.1473 14.4231L31.1255 14.4014C31.1238 14.4001 31.1224 14.3985 31.1215 14.3966L17.5006 0.775391L3.87983 14.3963C3.87826 14.3979 3.8758 14.401 3.8758 14.401L3.85333 14.4228C1.77053 16.5173 0.447586 19.2479 0.0948177 22.1806C-0.25795 25.1133 0.379698 28.0798 1.90639 30.6085C3.43309 33.1373 5.76122 35.0831 8.52069 36.1366C11.2802 37.1901 14.3126 37.2911 17.136 36.4231C17.3735 36.3505 17.6275 36.3505 17.8651 36.4231C20.6882 37.2907 23.7205 37.1898 26.4798 36.1361C29.2391 35.0824 31.567 33.1367 33.0936 30.6082C34.6202 28.0796 35.2579 25.1133 34.9053 22.1808C34.5526 19.2482 33.2299 16.5176 31.1473 14.4231ZM8.7232 23.4052C8.65689 23.4715 8.6043 23.5503 8.56844 23.6368C8.53257 23.7234 8.5141 23.8162 8.51412 23.91C8.53835 26.314 9.21776 28.6658 10.4792 30.7125C10.5079 30.7589 10.5211 30.8132 10.517 30.8676C10.513 30.9219 10.4918 30.9736 10.4566 31.0153C10.4213 31.057 10.3738 31.0864 10.3209 31.0994C10.2679 31.1124 10.2122 31.1084 10.1616 31.0878C9.21332 30.6889 8.35182 30.109 7.62531 29.3807C6.13646 27.8916 5.29946 25.8724 5.2981 23.7666C5.29675 21.6609 6.13117 19.6406 7.61812 18.1497L17.5006 8.26812L27.3826 18.1497C28.8698 19.6404 29.7045 21.6607 29.703 23.7666C29.7018 25.8724 28.8647 27.8916 27.3757 29.3807C26.6492 30.109 25.7877 30.6889 24.8396 31.0878C24.7889 31.1084 24.7332 31.1124 24.6802 31.0994C24.6273 31.0864 24.5798 31.0568 24.5445 31.0153C24.5093 30.9736 24.488 30.9219 24.484 30.8674C24.4799 30.8131 24.4931 30.7587 24.5218 30.7123C25.7835 28.6658 26.4633 26.314 26.4879 23.91C26.4879 23.8162 26.4692 23.7234 26.4332 23.6367C26.3971 23.55 26.3444 23.4713 26.2779 23.405L21.6037 18.4471C21.5571 18.4083 21.4985 18.387 21.4378 18.387C21.3773 18.387 21.3186 18.4083 21.2721 18.4471C21.2255 18.4858 21.1942 18.5398 21.1833 18.5994C21.1724 18.6591 21.1828 18.7204 21.2127 18.7732C23.0281 22.0584 21.467 26.7771 18.8637 29.3807L18.85 29.3945C18.4907 29.7499 18.0056 29.9492 17.5002 29.949C16.9948 29.9488 16.5098 29.7492 16.1508 29.3936L16.1382 29.3807C13.5339 26.7771 11.9736 22.0589 13.7893 18.7739C13.8192 18.7211 13.8296 18.6598 13.8187 18.6001C13.8079 18.5405 13.7764 18.4865 13.7299 18.4478C13.6834 18.409 13.6247 18.3877 13.5642 18.3877C13.5036 18.3877 13.4449 18.409 13.3984 18.4478L8.7232 23.4052Z"
            fill="#F53838"
          />
        </svg>
        <div className="footer-det-vpn">
          <span>LaslesVPN</span> is a private virtual network that has unique
          features and has high security.
        </div>
        <svg
          width="177"
          height="71"
          viewBox="0 0 177 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_821_2)">
            <circle cx="34.8001" cy="22.3805" r="16.7999" fill="#F53838" />
          </g>
          <path
            d="M34.8 5.58057C25.5215 5.58057 18 13.1021 18 22.3806C18 31.6591 25.5215 39.1806 34.8 39.1806C44.0785 39.1806 51.6 31.6591 51.6 22.3806C51.6 13.1021 44.0785 5.58057 34.8 5.58057ZM38.7795 17.1901H36.2543C35.955 17.1901 35.6225 17.5838 35.6225 18.1071V19.9306H38.7813L38.3035 22.5311H35.6225V30.3378H32.6423V22.5311H29.9385V19.9306H32.6423V18.4011C32.6423 16.2066 34.1648 14.4233 36.2543 14.4233H38.7795V17.1901Z"
            fill="white"
          />
          <g filter="url(#filter1_d_821_2)">
            <circle cx="88.4" cy="22.3805" r="16.7999" fill="#F53838" />
          </g>
          <path
            d="M88.4 5.58057C79.1215 5.58057 71.6 13.1021 71.6 22.3806C71.6 31.6591 79.1215 39.1806 88.4 39.1806C97.6785 39.1806 105.2 31.6591 105.2 22.3806C105.2 13.1021 97.6785 5.58057 88.4 5.58057ZM95.2337 19.3426C95.2407 19.4861 95.2425 19.6296 95.2425 19.7696C95.2425 24.1446 91.9157 29.1863 85.8292 29.1863C84.0307 29.1893 82.2697 28.6728 80.7577 27.6988C81.015 27.7303 81.2792 27.7426 81.547 27.7426C83.0975 27.7426 84.5237 27.2158 85.656 26.3268C84.966 26.3133 84.2974 26.0848 83.7434 25.6732C83.1894 25.2617 82.7777 24.6875 82.5655 24.0308C83.061 24.125 83.5715 24.1053 84.0582 23.9731C83.3093 23.8216 82.6358 23.4158 82.152 22.8245C81.6681 22.2331 81.4037 21.4926 81.4035 20.7286V20.6883C81.8497 20.9351 82.3607 21.0856 82.9032 21.1031C82.2011 20.6357 81.7041 19.9177 81.5138 19.0961C81.3235 18.2744 81.4543 17.411 81.8795 16.6826C82.7106 17.7046 83.7472 18.5406 84.922 19.1366C86.0968 19.7326 87.3836 20.0752 88.6992 20.1423C88.532 19.4324 88.604 18.687 88.904 18.0222C89.204 17.3574 89.7153 16.8103 90.3584 16.466C91.0014 16.1218 91.7402 15.9996 92.4598 16.1185C93.1794 16.2374 93.8396 16.5907 94.3377 17.1236C95.0783 16.9771 95.7884 16.7054 96.4377 16.3203C96.1909 17.0871 95.6742 17.7381 94.9835 18.1526C95.6395 18.0736 96.28 17.8972 96.884 17.6293C96.4403 18.2941 95.8815 18.8743 95.2337 19.3426Z"
            fill="white"
          />
          <g filter="url(#filter2_d_821_2)">
            <circle cx="142" cy="22.3805" r="16.7999" fill="#F53838" />
          </g>
          <path
            d="M147.25 22.3806C147.25 23.773 146.697 25.1083 145.712 26.0929C144.728 27.0774 143.392 27.6306 142 27.6306C140.608 27.6306 139.272 27.0774 138.288 26.0929C137.303 25.1083 136.75 23.773 136.75 22.3806C136.75 22.0813 136.781 21.7891 136.836 21.5056H135V28.5003C135 28.9868 135.394 29.3806 135.88 29.3806H148.121C148.355 29.3801 148.578 29.2872 148.743 29.1221C148.907 28.9571 149 28.7335 149 28.5003V21.5056H147.164C147.218 21.7891 147.25 22.0813 147.25 22.3806ZM142 25.8806C142.46 25.8805 142.915 25.7898 143.34 25.6137C143.764 25.4377 144.15 25.1797 144.475 24.8546C144.8 24.5294 145.058 24.1434 145.234 23.7186C145.41 23.2938 145.5 22.8386 145.5 22.3788C145.5 21.9191 145.409 21.4639 145.233 21.0392C145.057 20.6145 144.799 20.2286 144.474 19.9036C144.149 19.5786 143.763 19.3208 143.338 19.145C142.913 18.9691 142.458 18.8787 141.998 18.8788C141.07 18.8791 140.179 19.2481 139.523 19.9048C138.867 20.5615 138.498 21.4521 138.498 22.3806C138.498 23.3091 138.867 24.1994 139.524 24.8558C140.181 25.5122 141.071 25.8808 142 25.8806ZM146.2 18.7056H148.298C148.438 18.7056 148.571 18.6503 148.67 18.5519C148.769 18.4535 148.824 18.32 148.825 18.1806V16.0823C148.825 15.9426 148.769 15.8086 148.671 15.7098C148.572 15.6111 148.438 15.5556 148.298 15.5556H146.2C146.06 15.5556 145.926 15.6111 145.827 15.7098C145.729 15.8086 145.673 15.9426 145.673 16.0823V18.1806C145.675 18.4693 145.911 18.7056 146.2 18.7056ZM142 5.58057C137.544 5.58057 133.271 7.35056 130.121 10.5012C126.97 13.6518 125.2 17.9249 125.2 22.3806C125.2 26.8362 126.97 31.1094 130.121 34.26C133.271 37.4106 137.544 39.1806 142 39.1806C144.206 39.1806 146.391 38.746 148.429 37.9017C150.467 37.0575 152.319 35.82 153.879 34.26C155.439 32.6999 156.677 30.8479 157.521 28.8097C158.365 26.7714 158.8 24.5868 158.8 22.3806C158.8 20.1744 158.365 17.9898 157.521 15.9515C156.677 13.9132 155.439 12.0612 153.879 10.5012C152.319 8.94115 150.467 7.70367 148.429 6.85939C146.391 6.01511 144.206 5.58057 142 5.58057ZM150.75 29.1863C150.75 30.2556 149.875 31.1306 148.806 31.1306H135.194C134.125 31.1306 133.25 30.2556 133.25 29.1863V15.5748C133.25 14.5056 134.125 13.6306 135.194 13.6306H148.806C149.875 13.6306 150.75 14.5056 150.75 15.5748V29.1863Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_821_2"
              x="0.00012207"
              y="0.580566"
              width="69.5999"
              height="69.5999"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="13" />
              <feGaussianBlur stdDeviation="9" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0658854 0 0 0 0 0.0730469 0 0 0 0 0.1375 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_821_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_821_2"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_821_2"
              x="53.6001"
              y="0.580566"
              width="69.5999"
              height="69.5999"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="13" />
              <feGaussianBlur stdDeviation="9" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0658854 0 0 0 0 0.0730469 0 0 0 0 0.1375 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_821_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_821_2"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_821_2"
              x="107.2"
              y="0.580566"
              width="69.5999"
              height="69.5999"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="13" />
              <feGaussianBlur stdDeviation="9" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0658854 0 0 0 0 0.0730469 0 0 0 0 0.1375 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_821_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_821_2"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <div className="cop">©2020LaslesVPN</div>
      </div>
      <div className="footer-right-side d-flex">
        <div className="det-left-side">
          <div className="det-footer-title">Product</div>
          <li>Download</li>
          <li>Pricing</li>
          <li>Locations</li>
          <li>Server</li>
          <li>Countries</li>
          <li>Blog</li>
        </div>
        <div className="det-mid-side">
          <div className="det-footer-title">Engage</div>
          <li>LaslesVPN ?</li>
          <li>FAQ</li>
          <li>Tutorials</li>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </div>
        <div className="det-right-side">
          <div className="det-footer-title">Earn Money</div>
          <li>Affiliate</li>
          <li>Become Partner</li>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
