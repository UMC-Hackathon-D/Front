export const cvw = (px: number, p0?: unknown) =>
    `${Math.floor((px / 1440) * 100)}vw`;
export const cvh = (px: number) => `${Math.floor((px / 1024) * 100)}vh`;
