export type ListItem = {
  id: number,
  value: string,
}

export type GetItemWithIdsType = (items: string[]) => ListItem[];
