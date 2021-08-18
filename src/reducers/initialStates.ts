export type InitialState_TYPE = {
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
export const initialState = {
  items: [
    {
      user_id: "A",
      link: "Add_tags_for_solutions",
      title: "Add tags for solutions",
      detail: "Easier to search for solutions based on a specific stack.",
      category: "Enhancement",
      comments: ["remove", "remove"],
      vote: 17,
      voted: false,
    },
    {
      user_id: "B",
      link: "2_tags_for_solutions",
      title: "2 tags for solutions",
      detail: "Easier to search for solutions based on a specific stack.",
      category: "UI",
      comments: ["remove", "remove", "remove"],
      vote: 22,
      voted: false,
    },
    {
      user_id: "C",
      link: "3_tags_for_solutions",
      title: "3 tags for solutions",
      detail: "Easier to search for solutions based on a specific stack.",
      category: "UX",
      comments: ["remove"],
      vote: 19,
      voted: false,
    },
    {
      user_id: "D",
      link: "4_tags_for_solutions",
      title: "4 tags for solutions",
      detail: "Easier to search for solutions based on a specific stack.",
      category: "Bug",
      comments: [],
      vote: 44,
      voted: false,
    },
  ],
};
