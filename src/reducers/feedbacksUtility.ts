import { Item, Replies, Comments_type } from "../Types";

export const onAdd = (currentItem: Item[], newItem: Item) => {
  const exist = currentItem.find((item: Item) => item.title === newItem.title);
  if (exist) {
    return currentItem;
  } else {
    const addedNewItem = [...currentItem, { ...newItem }];
    return addedNewItem;
  }
};

export const onEdit = (currentItem: Item[], editItem: Item) => {
  const exist = currentItem.find((item: Item) => item.link === editItem.link);
  if (exist) {
    const result = currentItem.map((item) =>
      item.link === editItem.link
        ? {
            ...exist,
            category: editItem.category,
            status: editItem.status,
            detail: editItem.detail,
          }
        : item
    );
    return result;
  }
};
export const onDel = (currentItem: Item[], delItem: string) => {
  const result = currentItem.filter((item: Item) => item.id !== delItem);
  return result;
};

export const addComment = (
  currentItem: Item[],
  newItem: Replies,
  target: string
) => {
  const itemIndex = currentItem.findIndex(
    (item: Item) => item.link.toLowerCase() === target
  );
  currentItem[itemIndex].comments.push(newItem);
  return [...currentItem];
};

export const addDirectReply = (
  currentItem: Item[],
  newItem: Replies,
  target: string
) => {
  const itemIndex = currentItem.findIndex((item: Item) =>
    item.comments.find((item: Item) => item.id === target)
  );
  const commentIndex = currentItem[itemIndex].comments.findIndex(
    (item: Item) => item.id === target
  );

  currentItem[itemIndex].comments[commentIndex].replies.push(newItem);
  return [...currentItem];
};

export const addInnerReply = (
  currentItem: Item[],
  newItem: Replies,
  target: string
) => {
  const itemIndex = currentItem.findIndex((item: Item) =>
    item.comments.find((item: Comments_type) =>
      item.replies.find((item: Item) => item.id === target)
    )
  );
  const commentIndex = currentItem[itemIndex].comments.findIndex(
    (item: Comments_type) =>
      item.replies.find((item: Item) => item.id === target)
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
