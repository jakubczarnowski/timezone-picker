import { useQuery } from '@tanstack/react-query';
import { envs } from '../shared/envs';

type TimezonesResponse = string[];

const fetchTimezones = async () => {
  const res = await fetch(`${envs.VITE_BASE_URL}/timezone`);
  return (await res.json()) as TimezonesResponse;
};

export const useTimezonesQuery = () => useQuery(['timezones'], fetchTimezones);
