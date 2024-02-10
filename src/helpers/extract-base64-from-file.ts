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
