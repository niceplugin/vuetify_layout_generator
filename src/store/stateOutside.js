export default {
  systemBar: {
    enabled: true,
    props: {
      absolute: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: position: absolute'
      },
      app: {
        val: true,
        def: true,
        type: 'boolean',
        des: '어플리케이션 레이아웃의 일부로 지정'
      },
      color: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: background-color: __VALUE__',
        placeholder: '예) red, lime darken-3, #ff0, rgba(0,0,0,.2)',
        link: 'https://vuetifyjs.com/en/styles/colors/#material-colors'
      },
      dark: {
        val: false,
        def: false,
        type: 'boolean',
        des: '다크 테마 적용'
      },
      fixed: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: position: fixed'
      },
      height: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      light: {
        val: false,
        def: false,
        type: 'boolean',
        des: '라이트 테마 적용'
      },
      "lights-out": {
        val: false,
        def: false,
        type: 'boolean',
        des: '바 배경색 투명'
      },
      window: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: height: 32px (기본값: 24px)'
      }
    }
  },
  appBar: {
    enabled: true,
    props: {
      absolute: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: position: absolute'
      },
      app: {
        val: true,
        def: true,
        type: 'boolean',
        des: '어플리케이션 레이아웃의 일부로 지정'
      },
      bottom: {
        val: false,
        def: false,
        type: 'boolean',
        des: '아래로 맞춤'
      },
      'clipped-left': {
        val: false,
        def: false,
        type: 'boolean',
        des: 'Navigation Drawer 를 바 아래로 위치 (왼쪽용)'
      },
      'clipped-right': {
        val: false,
        def: false,
        type: 'boolean',
        des: 'Navigation Drawer 를 바 아래로 위치 (오른쪽용)'
      },
      collapse: {
        val: false,
        def: false,
        type: 'boolean',
        des: '최소 크기로 접음'
      },
      'collapse-on-scroll': {
        val: false,
        def: false,
        type: 'boolean',
        des: '스크롤 시 최소 크기로 접음'
      },
      color: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: background-color: __VALUE__',
        placeholder: '예) red, lime darken-3, #ff0, rgba(0,0,0,.2)',
        link: 'https://vuetifyjs.com/en/styles/colors/#material-colors'
      },
      dark: {
        val: false,
        def: false,
        type: 'boolean',
        des: '다크 테마 적용'
      },
      dense: {
        val: false,
        def: false,
        type: 'boolean',
        des: '콘텐츠 크기를 48px로 줄임. (기본 96px)'
      },
      'elevate-on-scroll': {
        val: false,
        def: false,
        type: 'boolean',
        des: '스크롤 시 올림'
      },
      elevation: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '그림자 고도 설정 0 ~ 24',
        placeholder: '예) 16',
        link: 'https://vuetifyjs.com/en/styles/elevation/'
      },
      extended: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'extension 슬롯을 사용하지 않고 높이를 늘리려는 경우'
      },
      'extension-height': {
        val: 48,
        def: 48,
        type: 'string',
        placeholder: '예) 48, 18',
        des: 'extension 슬롯의 높이를 명시적으로 지정 (px 단위)'
      },
      'fade-img-on-scroll': {
        val: false,
        def: false,
        type: 'boolean',
        des: 'src 속성 또는 img 슬롯을 사용할 경우, 스크롤 시 페이드'
      },
      fixed: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: position: fixed'
      },
      flat: {
        val: false,
        def: false,
        type: 'boolean',
        des: '그림자 제거'
      },
      floating: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: display: inline-flex'
      },
      height: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'hide-on-scroll': {
        val: false,
        def: false,
        type: 'boolean',
        des: '스크롤 시 숨김. extension 슬롯은 계속 표시됨.'
      },
      'inverted-scroll': {
        val: false,
        def: false,
        type: 'boolean',
        des: '아래로 스크롤시 숨김, 위로 스크롤시 표시'
      },
      light: {
        val: false,
        def: false,
        type: 'boolean',
        des: '라이트 테마 적용'
      },
      'max-height': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: max-height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'max-width': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: max-width: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'min-height': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: min-height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'min-width': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: min-width: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      outlined: {
        val: false,
        def: false,
        type: 'boolean',
        des: '고도 그림자를 제거하고 얇은 테두리를 추가. !!버그: 그림자 제거 안됨. 수동제거 필요'
      },
      prominent: {
        val: false,
        def: false,
        type: 'boolean',
        des: '콘텐츠 높이를 128px로 적용'
      },
      rounded: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'border-radius 설정.',
        placeholder: '예) xl, pill',
        link: 'https://vuetifyjs.com/en/styles/border-radius/'
      },
      'scroll-off-screen': {
        val: false,
        def: false,
        type: 'boolean',
        des: '스크롤 시 숨김. extension 슬롯이 표시되지 않음.'
      },
      'scroll-target': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '스크롤 대상 요소를 선택. 기본값 window',
        placeholder: '#app'
      },
      'scroll-threshold': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'hide-on-scroll 속성을 활성화 하기 위한 스크롤 다운 px 값',
        placeholder: '240'
      },
      shaped: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'vuetify 에서 설정한 모양. (실용성 의문...)'
      },
      short: {
        val: false,
        def: false,
        type: 'boolean',
        des: '툴바 콘텐츠 높이를 56px. (prominent 속성 사용시 112px)'
      },
      'shrink-on-scroll': {
        val: false,
        def: false,
        type: 'boolean',
        des: '스크롤 시, prominent 속성의 툴바를 dense 또는 short로 점진적으로 변경'
      },
      src: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '이미지 리소스 url. 테스트용 url: https://picsum.photos/1024/240?grayscale',
        placeholder: '예) https://picsum.photos/1024/240?grayscale'
      },
      tag: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'root 엘리먼트의 태그 사용자 지정',
        placeholder: '기본 값) header'
      },
      tile: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'border-radius 삭제'
      },
      width: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '넓이 지정',
        placeholder: '예) 48, 18'
      },
    },
    slots: {
      extension: {
        val: false
      },
      img: {
        val: false
      }
    },
    etc: {
      'v-app-bar-nav-icon': {
        val: true
      },
      'v-toolbar-title': {
        val: true
      }
    }
  },
  toolbar: {
    enabled: true,
    props: {
      absolute: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: position: absolute'
      },
      collapse: {
        val: false,
        def: false,
        type: 'boolean',
        des: '최소 크기로 접음'
      },
      color: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: background-color: __VALUE__',
        placeholder: '예) red, lime darken-3, #ff0, rgba(0,0,0,.2)',
        link: 'https://vuetifyjs.com/en/styles/colors/#material-colors'
      },
      dark: {
        val: false,
        def: false,
        type: 'boolean',
        des: '다크 테마 적용'
      },
      dense: {
        val: false,
        def: false,
        type: 'boolean',
        des: '콘텐츠 크기를 48px로 줄임. (기본 96px)'
      },
      elevation: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '그림자 고도 설정 0 ~ 24',
        placeholder: '예) 16',
        link: 'https://vuetifyjs.com/en/styles/elevation/'
      },
      extended: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'extension 슬롯을 사용하지 않고 높이를 늘리려는 경우'
      },
      'extension-height': {
        val: 48,
        def: 48,
        type: 'string',
        placeholder: '예) 48, 18',
        des: 'extension 슬롯의 높이를 명시적으로 지정 (px 단위)'
      },
      flat: {
        val: false,
        def: false,
        type: 'boolean',
        des: '그림자 제거'
      },
      floating: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: display: inline-flex'
      },
      height: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      light: {
        val: false,
        def: false,
        type: 'boolean',
        des: '라이트 테마 적용'
      },
      'max-height': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: max-height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'max-width': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: max-width: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'min-height': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: min-height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'min-width': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: min-width: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      outlined: {
        val: false,
        def: false,
        type: 'boolean',
        des: '얇은 테두리를 추가.'
      },
      prominent: {
        val: false,
        def: false,
        type: 'boolean',
        des: '콘텐츠 높이를 128px로 적용'
      },
      rounded: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'border-radius 설정.',
        placeholder: '예) xl, pill',
        link: 'https://vuetifyjs.com/en/styles/border-radius/'
      },
      shaped: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'vuetify 에서 설정한 모양. (실용성 의문...)'
      },
      short: {
        val: false,
        def: false,
        type: 'boolean',
        des: '툴바 콘텐츠 높이를 56px. (prominent 속성 사용시 112px)'
      },
      src: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '이미지 리소스 url. 테스트용 url: https://picsum.photos/1024/240?grayscale',
        placeholder: '예) https://picsum.photos/1024/240?grayscale'
      },
      tag: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'root 엘리먼트의 태그 사용자 지정',
        placeholder: '기본 값) header'
      },
      tile: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'border-radius 삭제'
      },
      width: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '넓이 지정',
        placeholder: '예) 48, 18'
      },
    },
    slots: {
      extension: {
        val: false
      },
      img: {
        val: false
      }
    },
    etc: {
      'v-app-bar-nav-icon': {
        val: true
      },
      'v-toolbar-title': {
        val: true
      }
    }
  },
  navigationDrawer: {
    enabled: true,
    props: {
      absolute: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: position: absolute'
      },
      app: {
        val: true,
        def: true,
        type: 'boolean',
        des: '어플리케이션 레이아웃의 일부로 지정'
      },
      bottom: {
        val: false,
        def: false,
        type: 'boolean',
        des: '모바일 화면 모드 일 경우 매뉴가 하단에서 확장됨'
      },
      clipped: {
        val: false,
        def: false,
        type: 'boolean',
        des: '컴포넌트를 바 아래로 위치함. ' +
          'v-app-bar 의 속성 clipped-left 또는 clipped-right 가 활성화 되야 함.'
      },
      color: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: background-color: __VALUE__',
        placeholder: '예) red, lime darken-3, #ff0, rgba(0,0,0,.2)',
        link: 'https://vuetifyjs.com/en/styles/colors/#material-colors'
      },
      dark: {
        val: false,
        def: false,
        type: 'boolean',
        des: '다크 테마 적용'
      },
      'disable-resize-watcher': {
        val: false,
        def: false,
        type: 'boolean',
        des: '모바일 또는 데스크톱 화면 크기에 따라 자동으로 매뉴를 여닫는 기능 비활성화'
      },
      'disable-route-watcher': {
        val: false,
        def: false,
        type: 'boolean',
        des: '경로 변경시 탐색 창 열기 비활성화'
      },
      'expand-on-hover': {
        val: false,
        def: false,
        type: 'boolean',
        des: '마우스를 가져갈 때까지 mini-variant 상태로 유지'
      },
      fixed: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: position: fixed'
      },
      floating: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'A floating drawer has no visible container (no border-right)'
      },
      height: {
        val: '100%',
        def: '100%',
        type: 'string',
        des: 'CSS 적용: height: __VALUE__',
        placeholder: '예) 48, 18'
      },
      'hide-overlay': {
        val: false,
        def: false,
        type: 'boolean',
        des: '오버레이 표시 비활성화'
      },
      light: {
        val: false,
        def: false,
        type: 'boolean',
        des: '라이트 테마 적용'
      },
      'mini-variant': {
        val: false,
        def: false,
        type: 'boolean',
        des: '매뉴 넓이를 축소. ".sync" 접두사 사용가능. ' +
          '이를 통해 매뉴 클릭 시 다시 열림'
      },
      'mini-variant-width': {
        val: '56',
        def: '56',
        type: 'string',
        des: '축소 상태의 넓이',
        placeholder: '예) 48, 18'
      },
      'mobile-breakpoint': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '모바일 브레이크 포인트 설정.',
        placeholder: '예) 48, 18'
      },
      'overlay-color': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '오버레이 컬러 설정',
        placeholder: '예) red'
      },
      'overlay-opacity': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '오버레이 투명도 설정. 0 ~ 1',
        placeholder: '예) 0.5'
      },
      permanent: {
        val: true,
        def: true,
        type: 'boolean',
        des: '화면 사이즈에 관계없이 계속 표시'
      },
      right: {
        val: false,
        def: false,
        type: 'boolean',
        des: '오른쪽에 위치'
      },
      src: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '이미지 리소스 url. 테스트용 url: https://picsum.photos/240/1024?grayscale',
        placeholder: '예) https://picsum.photos/240/1024?grayscale'
      },
      stateless: {
        val: false,
        def: false,
        type: 'boolean',
        des: '모든 자동화 된 상태 기능 (크기 조정, 이동, 라우팅)을 제거하고,' +
          ' 매뉴 상태를 수동으로 제어.'
      },
      tag: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'root 엘리먼트의 태그 사용자 지정',
        placeholder: '기본값) aside'
      },
      temporary: {
        val: false,
        def: false,
        type: 'boolean',
        des: '임시 매뉴는 앱 위에 있으며 오버레이를 사용하여 배경을 어둡게 함.'
      },
      touchless: {
        val: false,
        def: false,
        type: 'boolean',
        des: '모바일 터치 기능 비활성화'
      },
      width: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '넓이 지정',
        placeholder: '예) 48, 18'
      },
    },
    slots: {
      append: {
        val: false
      },
      img: {
        val: false
      },
      prepend: {
        val: false
      },
    }
  },
  container: {
    enabled: true,
    props: {
      fluid: {
        val: false,
        def: false,
        type: 'boolean',
        des: '뷰포트에 따른 제한된 최대 넓이 미적용.'
      },
      id: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'DOM id 설정',
      },
      tag: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'root 엘리먼트의 태그 사용자 지정',
        placeholder: '기본 값) div'
      },
    }
  },
  footer: {
    enabled: true,
    props: {
      absolute: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: position: absolute'
      },
      app: {
        val: true,
        def: true,
        type: 'boolean',
        des: '어플리케이션 레이아웃의 일부로 지정'
      },
      color: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: background-color: __VALUE__',
        placeholder: '예) red, lime darken-3, #ff0, rgba(0,0,0,.2)',
        link: 'https://vuetifyjs.com/en/styles/colors/#material-colors'
      },
      dark: {
        val: false,
        def: false,
        type: 'boolean',
        des: '다크 테마 적용'
      },
      elevation: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '그림자 고도 설정 0 ~ 24',
        placeholder: '예) 16',
        link: 'https://vuetifyjs.com/en/styles/elevation/'
      },
      fixed: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: position: fixed'
      },
      height: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      inset: {
        val: false,
        def: false,
        type: 'boolean',
        des: '앱 "v-navigation-drawer"에서 도구 모음 오프셋을 배치합니다.'
      },
      light: {
        val: false,
        def: false,
        type: 'boolean',
        des: '라이트 테마 적용'
      },
      'max-height': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: max-height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'max-width': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: max-width: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'min-height': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: min-height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'min-width': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: min-width: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      outlined: {
        val: false,
        def: false,
        type: 'boolean',
        des: '고도 그림자를 제거하고 얇은 테두리를 추가합니다.'
      },
      padless: {
        val: false,
        def: false,
        type: 'boolean',
        des: '상하좌우 기본 내부 여백 제거'
      },
      rounded: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'border-radius 설정.',
        placeholder: '예) xl, pill',
        link: 'https://vuetifyjs.com/en/styles/border-radius/'
      },
      shaped: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'vuetify 에서 설정한 모양. (실용성 의문...)'
      },
      tag: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'root 엘리먼트의 태그 사용자 지정',
        placeholder: '기본 값) footer'
      },
      tile: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'border-radius 삭제'
      },
      width: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '넓이 지정',
        placeholder: '예) 48, 18'
      },
    }
  },
  bottomNavigation: {
    enabled: true,
    props: {
      absolute: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: position: absolute'
      },
      'active-class': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '"v-btn" 컴포넌트가 활성화 될 때 적용할 class'
      },
      app: {
        val: true,
        def: true,
        type: 'boolean',
        des: '어플리케이션 레이아웃의 일부로 지정'
      },
      'background-color': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '배경색을 변경',
        placeholder: '예) red, lime darken-3, #ff0, rgba(0,0,0,.2)',
      },
      color: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: background-color: __VALUE__',
        placeholder: '예) red, lime darken-3, #ff0, rgba(0,0,0,.2)',
        link: 'https://vuetifyjs.com/en/styles/colors/#material-colors'
      },
      dark: {
        val: false,
        def: false,
        type: 'boolean',
        des: '다크 테마 적용'
      },
      fixed: {
        val: false,
        def: false,
        type: 'boolean',
        des: 'CSS 적용: position: fixed'
      },
      grow: {
        val: false,
        def: false,
        type: 'boolean',
        des: '"v-btn" 들이 사용 가능한 모든 공간을 차지하도록합니다.'
      },
      height: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'hide-on-scroll': {
        val: false,
        def: false,
        type: 'boolean',
        des: '스크롤 업 시 숨김.'
      },
      horizontal: {
        val: false,
        def: false,
        type: 'boolean',
        des: '"v-btn"에 대체 수평 스타일을 사용합니다.'
      },
      light: {
        val: false,
        def: false,
        type: 'boolean',
        des: '라이트 테마 적용'
      },
      'max-height': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: max-height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'max-width': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: max-width: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'min-height': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: min-height: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'min-width': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'CSS 적용: min-width: __VALUE__ (px 단위)',
        placeholder: '예) 48, 18'
      },
      'scroll-target': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '스크롤 대상 요소를 선택. 기본값 window',
        placeholder: '#app'
      },
      'scroll-threshold': {
        val: undefined,
        def: undefined,
        type: 'string',
        des: 'hide-on-scroll 속성을 활성화 하기 위한 스크롤 다운 px 값',
        placeholder: '240'
      },
      shift: {
        val: false,
        def: false,
        type: 'boolean',
        des: '"v-btn"가 활성화되지 않은 경우 텍스트를 숨 깁니다.'
      },
      width: {
        val: undefined,
        def: undefined,
        type: 'string',
        des: '넓이 지정',
        placeholder: '예) 48, 18'
      }
    }
  }
}