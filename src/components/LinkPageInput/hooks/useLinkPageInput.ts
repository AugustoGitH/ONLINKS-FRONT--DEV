import { useState } from "react";
import { ValueLinkPageInput } from "../types";
import { v4 as uuid } from "uuid";
interface UseLinkPageInput {
  value: ValueLinkPageInput | undefined;
  maxLinkCreation: number;
  events: {
    onChange: (value: ValueLinkPageInput) => void;
    onSave: (value?: ValueLinkPageInput | undefined) => Promise<boolean>;
    onAssignDefault: (state: boolean) => void;
  };
}
const useLinkPageInput = ({
  value,
  maxLinkCreation,
  events: { onChange, onSave, onAssignDefault },
}: UseLinkPageInput) => {
  const isLimited =
    value?.links === null ||
    (value?.links && Object.keys(value.links).length + 1 <= maxLinkCreation);
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);

  const handleToggleShowSaveConfirm = () =>
    setShowSaveConfirm((prevShow) => !prevShow);

  const handleChangeLinkPage = (value: ValueLinkPageInput) => {
    onChange(value);
    setShowSaveConfirm(true);
  };

  const handleSaveLinkPage = async () => {
    const isValid = await onSave(value);
    if (!isValid) return;
    setShowSaveConfirm(false);
  };

  const selectInput = (prop: string, valueInp: any) => {
    if (!value) return;
    handleChangeLinkPage({
      ...value,
      [prop]: valueInp,
    });
  };

  const addLink = () => {
    if (!isLimited || !value) return;
    handleChangeLinkPage({
      ...value,
      links: {
        ...(value.links ?? {}),
        [uuid()]: {
          href: "",
          title: "",
          icon: null,
          order: value.links ? Object.keys(value.links).length + 1 : 1,
        },
      },
    });
  };

  const assignDefault = () => {
    if (!value) return;
    handleChangeLinkPage({
      ...value,
      isDefault: !value?.isDefault,
    });
    onAssignDefault(!value?.isDefault);
  };

  const deleteLink = (id: string) => {
    if (!value) return;
    handleChangeLinkPage({
      ...value,
      ...(value.links && {
        links: Object.fromEntries(
          Object.entries(value.links).filter(([idV]) => idV !== id)
        ),
      }),
    });
  };

  return {
    assignDefault,
    deleteLink,
    addLink,
    selectInput,
    handleSaveLinkPage,
    handleToggleShowSaveConfirm,
    showSaveConfirm,
    isLimited,
  };
};

export default useLinkPageInput;
