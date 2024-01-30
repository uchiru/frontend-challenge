export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type QueryParams = {
  limit: number;
  page: number;
  order?: "ASC" | "DESC" | "RAND ";
};
