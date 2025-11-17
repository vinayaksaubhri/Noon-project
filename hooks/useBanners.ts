import { fetchBanners } from '@/services/api'
import { Banner } from '@/types/banner'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

// Hook for fetching active banners
export function useBanners(): UseQueryResult<Banner[], Error> {
  return useQuery({
    queryKey: ['banners'],
    queryFn: fetchBanners,
    staleTime: 10 * 60 * 1000, // 10 minutes (banners don't change frequently)
    gcTime: 30 * 60 * 1000, // 30 minutes
    retry: 3, // Retry failed requests up to 3 times
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  })
}

// Default export
export default useBanners