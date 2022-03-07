export enum ScreenSizeType {
  XS,
  SM,
  MD,
  LG
}

export const screenSize: { [key in ScreenSizeType]: number } = {
  [ScreenSizeType.XS]: 0,
  [ScreenSizeType.SM]: 840,
  [ScreenSizeType.MD]: 1024,
  [ScreenSizeType.LG]: 1440,
}
