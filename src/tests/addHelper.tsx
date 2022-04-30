export const addToDo = (
  list: { name: string; description: string; checked: boolean }[],
  item: { name: string; description: string; checked: boolean }
) => [...list, item]
