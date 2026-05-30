declare module '@splidejs/react-splide' {
  import type { FC, LiHTMLAttributes } from 'react';
  import type { Options } from '@splidejs/splide';

  export interface SplideProps {
    options?: Options;
    extensions?: Record<string, any>;
    transition?: any;
    hasTrack?: boolean;
    tag?: string;
    children?: React.ReactNode;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  }

  export const Splide: FC<SplideProps>;
  export const SplideSlide: FC<LiHTMLAttributes<HTMLLIElement>>;
  export const SplideTrack: FC<{ children?: React.ReactNode; [key: string]: any }>;
}

declare module '@splidejs/react-splide/css' {}
declare module '@splidejs/react-splide/css/core' {}