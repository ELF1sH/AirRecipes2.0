export const sleep = (t) => new Promise<void>((r) => {
  setTimeout(() => r(), t);
});
