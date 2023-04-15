import { Wrapper, Label, Input } from './FilterForm.styled';

export const FilterForm = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Label htmlFor="">
        Find contacts by name:
        <Input
          type="text"
          placeholder="Please enter name..."
          value={value}
          onChange={onChange}
        />
      </Label>
    </Wrapper>
  );
};
