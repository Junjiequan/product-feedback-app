import { Item, Replies } from "../Types";

export const onAdd = (currentItem: Item[], newItem: Item) => {
  const exist = currentItem.find((item: Item) => item.title === newItem.title);
  if (exist) {
    return currentItem;
  } else {
    const addedNewItem = [...currentItem, { ...newItem }];
    return addedNewItem;
  }
};

export const addComment = (
  currentItem: Item[],
  newItem: Replies,
  target: string
) => {
  const itemIndex = currentItem.findIndex(
    (item: any) => item.link.toLowerCase() === target
  );
  currentItem[itemIndex].comments.push(newItem);
  return [...currentItem];
};

export const addDirectReply = (
  currentItem: Item[] | any,
  newItem: Replies,
  target: string
) => {
  const itemIndex = currentItem.findIndex((item: any) =>
    item.comments.find((item: any) => item.id === target)
  );
  const commentIndex = currentItem[itemIndex].comments.findIndex(
    (item: any) => item.id === target
  );

  currentItem[itemIndex].comments[commentIndex].replies.push(newItem);
  return [...currentItem];
};

export const addInnerReply = (
  currentItem: Item[] | any,
  newItem: Replies,
  target: string
) => {
  const itemIndex = currentItem.findIndex((item: any) =>
    item.comments.find((item: any) =>
      item.replies.find((item: any) => item.id === target)
    )
  );
  const commentIndex = currentItem[itemIndex].comments.findIndex((item: any) =>
    item.replies.find((item: any) => item.id === target)
  );

  currentItem[itemIndex].comments[commentIndex].replies.push(newItem);
  return [...currentItem];
};

export const upVote = (currentItem: Item[], newItem: Item) => {
  const exist = currentItem.find((item: Item) => item.title === newItem.title);
  if (exist) {
    const voted = currentItem.map((item: Item) =>
      item.title === newItem.title
        ? { ...exist, vote: exist.vote + 1, voted: true }
        : item
    );
    return voted;
  } else return currentItem;
};

export const downVote = (currentItem: Item[], newItem: Item) => {
  const exist = currentItem.find((item: Item) => item.title === newItem.title);
  if (exist) {
    const voted = currentItem.map((item: Item) =>
      item.title === newItem.title
        ? { ...exist, vote: exist.vote - 1, voted: false }
        : item
    );
    return voted;
  } else return currentItem;
};
