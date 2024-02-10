import { useEffect, useState } from "react";

export const useLoaderContents = (
  ...contents: Array<string | null | undefined>
) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (contents.every((cont) => typeof cont === "string")) {
      setIsLoading(false);
    }
  }, [contents]);

  return { isLoading };
};
