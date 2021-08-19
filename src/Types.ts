export type InitialState = {
  items: {
    link: string;
    title: string;
    detail: string;
    category: string;
    comments?: any;
    vote: number;
    voted: boolean;
  }[];
};

export type Item = {
  link: string;
  title: string;
  detail: string;
  category: string;
  comments?: any;
  vote: number;
  voted: boolean;
};

export type RootState = {
  sorts: string;
  filters: string;
  feedbacks: InitialState;
  items: Item[];
};

export type SetState = {
  setCountSuggetions: Function;
};
