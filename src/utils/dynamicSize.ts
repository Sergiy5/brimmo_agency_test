export const dynamicSize = (size: string) => {
  return `calc(var(--index) * ${size} / var(--index-ratio))`;
};
