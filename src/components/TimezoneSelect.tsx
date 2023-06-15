import { Select, SelectProps } from '@chakra-ui/react';
import { useTimezonesQuery } from '../api/useTimezonesQuery';

type Props = SelectProps;

export const TimezoneSelect = (props: Props) => {
  const { data } = useTimezonesQuery();

  return (
    <Select {...props}>
      {data?.map((timezone) => (
        <option key={timezone} value={timezone}>
          {timezone}
        </option>
      ))}
    </Select>
  );
};
