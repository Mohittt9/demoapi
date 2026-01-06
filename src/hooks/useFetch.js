import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  // Start as true so the loader shows immediately on first mount/refresh
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  
  // This state is used purely to trigger a re-run of the effect
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    // 1. Create the abort controller
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        
        // Only update state if the signal hasn't been aborted
        if (!signal.aborted) {
            setData(result);
        }
      } catch (err) {
        if (!signal.aborted) {
           // Ignore "AbortError" (cancelled requests), handle others
           if (err.name !== 'AbortError') {
             setError(err.message);
           }
        }
      } finally {
        // Only turn off loading if not aborted
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // 2. Cleanup function: Aborts the fetch if component unmounts OR if refetch is clicked
    return () => controller.abort();

  }, [url, trigger]); // Effect runs when URL changes OR when trigger changes

  // The refetch function simply increments the trigger to force useEffect to run again
  const refetch = () => setTrigger((prev) => prev + 1);

  return { data, loading, error, refetch };
};

export default useFetch;