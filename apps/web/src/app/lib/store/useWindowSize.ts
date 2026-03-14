import { create } from 'zustand';

type WindowSize = {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

type WindowSizeStore = {
  windowSize: WindowSize;
  setWindowSize: (size: WindowSize) => void;
}

const getInitialSize = (): WindowSize => {
  if (typeof window === 'undefined') {
    return {
      width: 0,
      height: 0,
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    width,
    height,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
};

export const useWindowSize = create<WindowSizeStore>((set) => ({
  windowSize: getInitialSize(),
  setWindowSize: (size) => set({ windowSize: size }),
}));

export const initializeWindowSizeListener = () => {
  if (typeof window === 'undefined') return;

  const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    useWindowSize.setState({
      windowSize: {
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      },
    });
  };

  window.addEventListener('resize', handleResize);
  handleResize();

  return () => window.removeEventListener('resize', handleResize);
};
