import Button from "../../atoms/Button/Button";

type AnswerOptionProps = {
  option: string;
  onSelect: (option: string) => void;
  state: string;
};

export default function AnswerOption({
  option,
  state,
  onSelect,
}: AnswerOptionProps) {
  return (
    <Button onClick={() => onSelect(option)} data-state={state}>
      {option}
    </Button>
  );
}
