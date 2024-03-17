export const extractBase64FromFile = (
  file: File,
  onLoadend: (base64: string | ArrayBuffer | null) => void
) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    onLoadend(reader.result);
  };
  reader.readAsDataURL(file);
};

export const extractBase64FromFileAsync = (file: File): Promise<string> => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      res(reader.result as string);
    };
    reader.readAsDataURL(file);
  });
};
