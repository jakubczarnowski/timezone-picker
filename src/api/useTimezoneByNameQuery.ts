import { useQuery } from '@tanstack/react-query';
import { envs } from '../shared/envs';

export interface Timezone {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_offset: number;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

const fetchTimezoneByName = async (timezone: string) => {
  const res = await fetch(envs.VITE_BASE_URL + `/timezone/${timezone}`);
  return (await res.json()) as Timezone;
};

export const useTimezoneByNameQuery = (timezone: string) =>
  useQuery(['timezone', timezone], () => fetchTimezoneByName(timezone));
