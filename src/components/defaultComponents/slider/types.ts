export type ActiveThumb = 0 | 1;

export interface GetStateHandle {
  getState: () => number[],
}
