import { Flex, Spinner, Text } from '@chakra-ui/react';
import { TimezoneSelect } from './TimezoneSelect';
import { useEffect, useState } from 'react';
import { useTimezoneByNameQuery } from '../api/useTimezoneByNameQuery';
import { useTimezonesQuery } from '../api/useTimezonesQuery';
import { LoadingScreen } from './Loading';
import { formatInTimeZone } from 'date-fns-tz';

const useTimer = (refreshInterval = 5000) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);
  return currentTime;
};

export const Timer = () => {
  const { data, isLoading, isError } = useTimezonesQuery();
  if (isLoading) return <LoadingScreen />;
  if (isError) return <div>Something went wrong</div>;
  return <TimerContent defaultTimezone={data[0]} />;
};

const TimerContent = ({ defaultTimezone }: { defaultTimezone: string }) => {
  const [timezone, setTimezone] = useState(defaultTimezone);
  const currentTime = useTimer();
  const { data } = useTimezoneByNameQuery(timezone);
  return (
    <Flex h="full" w="full" direction="column" alignItems="center" justifyContent="center">
      <Text fontSize="2xl">Select your Timezone!</Text>
      <TimezoneSelect value={timezone} onChange={(val) => setTimezone(val.target.value)} />
      <Text fontSize="2xl">
        Current Time:{' '}
        {data ? formatInTimeZone(currentTime, data.utc_offset, 'yyyy-MM-dd HH:mm:ss') : <Spinner />}
      </Text>
    </Flex>
  );
};
