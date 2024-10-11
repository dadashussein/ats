const style = {
  fill: 'none'
}


export const TrashIcon = props => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
      style={style}
        d="M13.3333 4.99999V4.33332C13.3333 3.3999 13.3333 2.93319 13.1517 2.57667C12.9919 2.26307 12.7369 2.0081 12.4233 1.84831C12.0668 1.66666 11.6001 1.66666 10.6667 1.66666H9.33333C8.39991 1.66666 7.9332 1.66666 7.57668 1.84831C7.26308 2.0081 7.00811 2.26307 6.84832 2.57667C6.66667 2.93319 6.66667 3.3999 6.66667 4.33332V4.99999M8.33333 9.58332V13.75M11.6667 9.58332V13.75M2.5 4.99999H17.5M15.8333 4.99999V14.3333C15.8333 15.7335 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8212 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8212 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7335 4.16667 14.3333V4.99999"
        stroke="#475467"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Loading = props => {
  return (
    <svg
      width="21"
      height="20"
      {...props}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
      style={style}
        d="M17.5441 10.7442C17.3126 12.9191 16.0803 14.9572 14.0411 16.1345C10.6532 18.0905 6.32114 16.9298 4.36513 13.5419L4.1568 13.181M3.45509 9.25584C3.68659 7.08092 4.91891 5.04282 6.95807 3.86551C10.346 1.90951 14.6781 3.07029 16.6341 6.45819L16.8424 6.81904M3.41095 15.055L4.02099 12.7783L6.2977 13.3884M14.702 6.61167L16.9787 7.22172L17.5887 4.94501"
        stroke="#475467"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SkillsIcon = props => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
      style={style}
        d="M10.8334 1.66666L3.41124 10.5732C3.12057 10.922 2.97523 11.0964 2.97301 11.2437C2.97108 11.3718 3.02814 11.4936 3.12774 11.5741C3.24232 11.6667 3.46934 11.6667 3.92339 11.6667H10L9.16669 18.3333L16.5888 9.42678C16.8795 9.07797 17.0248 8.90357 17.027 8.75627C17.029 8.62823 16.9719 8.5064 16.8723 8.42591C16.7577 8.33332 16.5307 8.33332 16.0767 8.33332H10L10.8334 1.66666Z"
        stroke="#384250"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ToolsMethodIcon = props => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
      style={style}
        d="M4.99999 5L8.74999 8.75M4.99999 5H2.49999L1.66666 2.5L2.49999 1.66667L4.99999 2.5V5ZM16.0491 2.28418L13.8595 4.47386C13.5295 4.80387 13.3644 4.96888 13.3026 5.15915C13.2482 5.32652 13.2482 5.50681 13.3026 5.67418C13.3644 5.86446 13.5295 6.02946 13.8595 6.35948L14.0572 6.55719C14.3872 6.88721 14.5522 7.05221 14.7425 7.11404C14.9098 7.16842 15.0901 7.16842 15.2575 7.11404C15.4478 7.05221 15.6128 6.88721 15.9428 6.55719L17.9911 4.50893C18.2117 5.04574 18.3333 5.63366 18.3333 6.25C18.3333 8.78131 16.2813 10.8333 13.75 10.8333C13.4448 10.8333 13.1466 10.8035 12.8581 10.7466C12.453 10.6667 12.2504 10.6268 12.1276 10.639C11.9971 10.652 11.9328 10.6716 11.8171 10.7335C11.7083 10.7917 11.5991 10.9009 11.3808 11.1191L5.41666 17.0833C4.7263 17.7737 3.60701 17.7737 2.91666 17.0833C2.2263 16.393 2.2263 15.2737 2.91666 14.5833L8.88085 8.61914C9.09913 8.40086 9.20828 8.29171 9.2665 8.18291C9.32841 8.06723 9.34798 8.00289 9.36099 7.87234C9.37322 7.74955 9.33327 7.54699 9.25338 7.14187C9.19648 6.85338 9.16666 6.55517 9.16666 6.25C9.16666 3.7187 11.2187 1.66667 13.75 1.66667C14.5879 1.66667 15.3733 1.89152 16.0491 2.28418ZM10 12.5L14.5833 17.0832C15.2737 17.7736 16.393 17.7736 17.0833 17.0832C17.7737 16.3929 17.7737 15.2736 17.0833 14.5832L13.3128 10.8127C13.0458 10.7875 12.7856 10.7393 12.534 10.6703C12.2098 10.5813 11.8541 10.6459 11.6164 10.8836L10 12.5Z"
        stroke="#384250"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EducationIcon = props => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
      style={style}
        d="M4.16666 8.33333V13.3426C4.16666 13.6418 4.16666 13.7913 4.2122 13.9234C4.25248 14.0401 4.31821 14.1465 4.40464 14.2347C4.50238 14.3345 4.63616 14.4014 4.90371 14.5352L9.4037 16.7852C9.62234 16.8945 9.73166 16.9492 9.84632 16.9707C9.94788 16.9897 10.0521 16.9897 10.1537 16.9707C10.2683 16.9492 10.3776 16.8945 10.5963 16.7852L15.0963 14.5352C15.3638 14.4014 15.4976 14.3345 15.5953 14.2347C15.6818 14.1465 15.7475 14.0401 15.7878 13.9234C15.8333 13.7913 15.8333 13.6418 15.8333 13.3426V8.33333M1.66666 7.08333L9.70185 3.06574C9.81117 3.01108 9.86582 2.98375 9.92316 2.97299C9.97394 2.96347 10.026 2.96347 10.0768 2.97299C10.1342 2.98375 10.1888 3.01108 10.2981 3.06574L18.3333 7.08333L10.2981 11.1009C10.1888 11.1556 10.1342 11.1829 10.0768 11.1937C10.026 11.2032 9.97394 11.2032 9.92316 11.1937C9.86582 11.1829 9.81117 11.1556 9.70185 11.1009L1.66666 7.08333Z"
        stroke="#384250"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ExperienceIcon = props => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
      style={style}
        d="M13.3333 5.83333C13.3333 5.05836 13.3333 4.67087 13.2481 4.35295C13.017 3.49022 12.3431 2.81635 11.4804 2.58519C11.1625 2.5 10.775 2.5 9.99999 2.5C9.22501 2.5 8.83753 2.5 8.51961 2.58519C7.65688 2.81635 6.98301 3.49022 6.75184 4.35295C6.66666 4.67087 6.66666 5.05836 6.66666 5.83333M4.33332 17.5H15.6667C16.6001 17.5 17.0668 17.5 17.4233 17.3183C17.7369 17.1586 17.9919 16.9036 18.1517 16.59C18.3333 16.2335 18.3333 15.7668 18.3333 14.8333V8.5C18.3333 7.56658 18.3333 7.09987 18.1517 6.74335C17.9919 6.42975 17.7369 6.17478 17.4233 6.01499C17.0668 5.83333 16.6001 5.83333 15.6667 5.83333H4.33332C3.3999 5.83333 2.93319 5.83333 2.57667 6.01499C2.26307 6.17478 2.0081 6.42975 1.84831 6.74335C1.66666 7.09987 1.66666 7.56658 1.66666 8.5V14.8333C1.66666 15.7668 1.66666 16.2335 1.84831 16.59C2.0081 16.9036 2.26307 17.1586 2.57667 17.3183C2.93319 17.5 3.3999 17.5 4.33332 17.5Z"
        stroke="#384250"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LanguageIcon = props => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
      style={style}
        d="M10.7609 14.1667H16.7391M10.7609 14.1667L9.16666 17.5M10.7609 14.1667L13.1486 9.17419C13.341 8.77189 13.4372 8.57075 13.5688 8.50718C13.6833 8.4519 13.8167 8.4519 13.9312 8.50718C14.0628 8.57075 14.159 8.77189 14.3514 9.17419L16.7391 14.1667M16.7391 14.1667L18.3333 17.5M1.66666 4.16667H6.66666M6.66666 4.16667H9.58332M6.66666 4.16667V2.5M9.58332 4.16667H11.6667M9.58332 4.16667C9.16987 6.63107 8.21048 8.86349 6.80461 10.737M8.33332 11.6667C7.82288 11.4373 7.3022 11.1184 6.80461 10.737M6.80461 10.737C5.67751 9.87314 4.66896 8.68886 4.16666 7.5M6.80461 10.737C5.46737 12.5191 3.72619 13.9765 1.66666 15"
        stroke="#384250"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheckIcon = props => {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
      style={style}
        d="M13.3333 4L5.99996 11.3333L2.66663 8"
        stroke="#16B364"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CloseIcon = props => {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
      style={style}
        d="M12 4L4 12M4 4L12 12"
        stroke="#F04438"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


export const UserCheckIcon = props => {
  return (
    <svg

      width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_3175_6171)">
        <path style={style} d="M2.5 9C2.5 4.85787 5.85786 1.5 10 1.5H42C46.1421 1.5 49.5 4.85786 49.5 9V41C49.5 45.1421 46.1421 48.5 42 48.5H10C5.85787 48.5 2.5 45.1421 2.5 41V9Z" stroke="#EAECF0" shapeRendering="crispEdges" />
        <path style={style} d="M30 31L32 33L36 29M26 28H22C20.1362 28 19.2044 28 18.4693 28.3045C17.4892 28.7105 16.7105 29.4892 16.3045 30.4693C16 31.2044 16 32.1362 16 34M29.5 16.2908C30.9659 16.8841 32 18.3213 32 20C32 21.6787 30.9659 23.1159 29.5 23.7092M27.5 20C27.5 22.2091 25.7091 24 23.5 24C21.2909 24 19.5 22.2091 19.5 20C19.5 17.7909 21.2909 16 23.5 16C25.7091 16 27.5 17.7909 27.5 20Z" stroke="#384250" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d_3175_6171" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3175_6171" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3175_6171" result="shape" />
        </filter>
      </defs>
    </svg>

  )
}


export const UploadIcon = props => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3257_8326)">
        <path style={style} d="M6.66675 13.3333L10.0001 10M10.0001 10L13.3334 13.3333M10.0001 10V17.5M16.6667 13.9524C17.6847 13.1117 18.3334 11.8399 18.3334 10.4167C18.3334 7.88536 16.2814 5.83333 13.7501 5.83333C13.568 5.83333 13.3976 5.73833 13.3052 5.58145C12.2185 3.73736 10.2121 2.5 7.91675 2.5C4.46497 2.5 1.66675 5.29822 1.66675 8.75C1.66675 10.4718 2.36295 12.0309 3.48921 13.1613" stroke="#17B26A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_3257_8326">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}

export const SendMailIcon = props => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path style={style} d="M7.74952 10.25L16.4995 1.50002M7.85584 10.5234L10.0459 16.1551C10.2389 16.6512 10.3353 16.8993 10.4743 16.9717C10.5948 17.0345 10.7384 17.0345 10.859 16.9719C10.998 16.8997 11.0948 16.6517 11.2883 16.1558L16.7803 2.08269C16.955 1.63504 17.0423 1.41121 16.9945 1.26819C16.953 1.14398 16.8556 1.04651 16.7314 1.00501C16.5883 0.957234 16.3645 1.04458 15.9169 1.21927L1.84373 6.71122C1.34784 6.90474 1.09989 7.0015 1.02763 7.14059C0.964993 7.26116 0.965078 7.4047 1.02786 7.5252C1.10028 7.66421 1.34834 7.76067 1.84446 7.95361L7.47613 10.1437C7.57684 10.1829 7.62719 10.2024 7.66959 10.2327C7.70717 10.2595 7.74004 10.2924 7.76685 10.3299C7.79709 10.3723 7.81667 10.4227 7.85584 10.5234Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export const DownloadIcon = props => {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path style={style} d="M6.66675 13.1667L10.0001 16.5M10.0001 16.5L13.3334 13.1667M10.0001 16.5V9M16.6667 12.9524C17.6847 12.1117 18.3334 10.8399 18.3334 9.41667C18.3334 6.88536 16.2814 4.83333 13.7501 4.83333C13.568 4.83333 13.3976 4.73833 13.3052 4.58145C12.2185 2.73736 10.2121 1.5 7.91675 1.5C4.46497 1.5 1.66675 4.29822 1.66675 7.75C1.66675 9.47175 2.36295 11.0309 3.48921 12.1613" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}


export const SearchIcon = props => {
  return (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path style={style}  d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#6C737F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>


  )
}

export const StartIcon = () => {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_3175_6181)">
        <path style={style} d="M2.5 9C2.5 4.85787 5.85786 1.5 10 1.5H42C46.1421 1.5 49.5 4.85786 49.5 9V41C49.5 45.1421 46.1421 48.5 42 48.5H10C5.85787 48.5 2.5 45.1421 2.5 41V9Z" stroke="#EAECF0" shapeRendering="crispEdges" />
        <path style={style} d="M18.5 35V30M18.5 20V15M16 17.5H21M16 32.5H21M27 16L25.2658 20.5089C24.9838 21.2421 24.8428 21.6087 24.6235 21.9171C24.4292 22.1904 24.1904 22.4292 23.9171 22.6235C23.6087 22.8428 23.2421 22.9838 22.5089 23.2658L18 25L22.5089 26.7342C23.2421 27.0162 23.6087 27.1572 23.9171 27.3765C24.1904 27.5708 24.4292 27.8096 24.6235 28.0829C24.8428 28.3913 24.9838 28.7579 25.2658 29.4911L27 34L28.7342 29.4911C29.0162 28.7579 29.1572 28.3913 29.3765 28.0829C29.5708 27.8096 29.8096 27.5708 30.0829 27.3765C30.3913 27.1572 30.7579 27.0162 31.4911 26.7342L36 25L31.4911 23.2658C30.7579 22.9838 30.3913 22.8428 30.0829 22.6235C29.8096 22.4292 29.5708 22.1904 29.3765 21.9171C29.1572 21.6087 29.0162 21.2421 28.7342 20.5089L27 16Z" stroke="#384250" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d_3175_6181" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3175_6181" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3175_6181" result="shape" />
        </filter>
      </defs>
    </svg>


  )
}



export const WarningIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3257_8359)">
        <path style={style} d="M10.0001 6.66669V10M10.0001 13.3334H10.0084M18.3334 10C18.3334 14.6024 14.6025 18.3334 10.0001 18.3334C5.39771 18.3334 1.66675 14.6024 1.66675 10C1.66675 5.39765 5.39771 1.66669 10.0001 1.66669C14.6025 1.66669 18.3334 5.39765 18.3334 10Z" stroke="#F04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_3257_8359">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}


export const HeartIcon = () => {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_3175_6191)">
        <path style={style} d="M2.5 9C2.5 4.85787 5.85786 1.5 10 1.5H42C46.1421 1.5 49.5 4.85786 49.5 9V41C49.5 45.1421 46.1421 48.5 42 48.5H10C5.85787 48.5 2.5 45.1421 2.5 41V9Z" stroke="#EAECF0" shapeRendering="crispEdges" />
        <path style={style} fillRule="evenodd" clipRule="evenodd" d="M25.9932 18.1358C23.9938 15.7984 20.6597 15.1696 18.1547 17.31C15.6496 19.4504 15.297 23.029 17.2642 25.5604C18.8998 27.6651 23.8498 32.1041 25.4721 33.5408C25.6536 33.7016 25.7444 33.7819 25.8502 33.8135C25.9426 33.8411 26.0437 33.8411 26.1361 33.8135C26.2419 33.7819 26.3327 33.7016 26.5142 33.5408C28.1365 32.1041 33.0865 27.6651 34.7221 25.5604C36.6893 23.029 36.3797 19.4279 33.8316 17.31C31.2835 15.1922 27.9925 15.7984 25.9932 18.1358Z" stroke="#384250" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d_3175_6191" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3175_6191" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3175_6191" result="shape" />
        </filter>
      </defs>
    </svg>

  )
}



export const Loading2Icon = () => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path style={style} d="M11 1V5M11 17V21M5 11H1M21 11H17M18.0784 18.0784L15.25 15.25M18.0784 3.99994L15.25 6.82837M3.92157 18.0784L6.75 15.25M3.92157 3.99994L6.75 6.82837" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}