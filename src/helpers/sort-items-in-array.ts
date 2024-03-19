const sortItemsInArray = (array: any[], propOrder: string) => {
  return array.sort((a, b) => a[propOrder] - b[propOrder]);
};
export default sortItemsInArray;
