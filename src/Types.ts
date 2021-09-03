export type InitialState = {
  items: {
    id: string;
    link: string;
    title: string;
    detail: string;
    category: string;
    comments?: any;
    vote: number;
    voted: boolean;
    status: string;
  }[];
};

export type Item = {
  id: string;
  link: string;
  title: string;
  detail: string;
  category: string;
  comments?: any;
  vote: number;
  voted: boolean;
  status: string;
};

export type Comments_type = {
  id: any;
  user_name: string;
  avatar: string;
  user_id: string;
  comment: string;
  replies?: any;
};

export type Replies = {
  id: any;
  user_name: string;
  avatar: string;
  user_id: string;
  comment: string;
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
