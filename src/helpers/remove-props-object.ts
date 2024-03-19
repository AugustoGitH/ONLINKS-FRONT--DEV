const removePropsObject = (object: Record<string, any>, propRemove: string) => {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => key !== propRemove)
  );
};
export default removePropsObject;
