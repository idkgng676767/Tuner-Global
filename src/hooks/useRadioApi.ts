import { useState, useCallback } from 'react';
import type { Station, Country, Genre } from '../types/station';

const API_BASE = 'https://de1.api.radio-browser.info';

const fetchJson = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'User-Agent': 'TunerGlobal/1.0',
    },
  });
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return response.json() as Promise<T>;
};

export function useRadioApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(async <T>(endpoint: string): Promise<T | null> => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchJson<T>(endpoint);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const searchStations = useCallback(async (query: string, limit = 20): Promise<Station[]> => {
    const data = await request<Station[]>(`/json/stations/search?name=${encodeURIComponent(query)}&limit=${limit}&order=clickcount&reverse=true`);
    return data || [];
  }, [request]);

  const getTopStations = useCallback(async (count = 20): Promise<Station[]> => {
    const data = await request<Station[]>(`/json/stations/topclick/${count}`);
    return data || [];
  }, [request]);

  const getStationsByCountry = useCallback(async (countryCode: string, limit = 10): Promise<Station[]> => {
    const data = await request<Station[]>(`/json/stations/bycountrycodeexact/${encodeURIComponent(countryCode)}?limit=${limit}&order=clickcount&reverse=true`);
    return data || [];
  }, [request]);

  const getStationsByTag = useCallback(async (tag: string, limit = 10): Promise<Station[]> => {
    const data = await request<Station[]>(`/json/stations/bytag/${encodeURIComponent(tag)}?limit=${limit}&order=clickcount&reverse=true`);
    return data || [];
  }, [request]);

  const getStationsWithGeo = useCallback(async (limit = 50): Promise<Station[]> => {
    const data = await request<Station[]>(`/json/stations/search?has_geo_info=true&limit=${limit}&order=clickcount&reverse=true`);
    return data || [];
  }, [request]);

  const getCountries = useCallback(async (): Promise<Country[]> => {
    const data = await request<Country[]>(`/json/countries?order=stationcount&reverse=true`);
    return data || [];
  }, [request]);

  const getGenres = useCallback(async (): Promise<Genre[]> => {
    const data = await request<Genre[]>(`/json/tags?order=stationcount&reverse=true`);
    return data || [];
  }, [request]);

  const recordClick = useCallback(async (stationuuid: string): Promise<void> => {
    try {
      await fetch(`${API_BASE}/json/url/${stationuuid}`, {
        headers: { 'User-Agent': 'TunerGlobal/1.0' },
      });
    } catch {
      // Silently fail - click tracking is best-effort
    }
  }, []);

  return {
    loading,
    error,
    searchStations,
    getTopStations,
    getStationsByCountry,
    getStationsByTag,
    getStationsWithGeo,
    getCountries,
    getGenres,
    recordClick,
  };
}
