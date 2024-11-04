export type Paging = {
  size: number;
  total_page: number;
  current_page: number;
}

export type Pagealbe<T> = {
  data: Array<T>;
  paging: Paging;
}