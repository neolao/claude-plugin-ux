import { useEffect, useState } from "react";
import { searchJobs, Job } from "./api";

export function JobSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Job[]>([]);

  useEffect(() => {
    let cancelled = false;
    searchJobs(query).then((jobs) => {
      if (!cancelled) setResults(jobs);
    });
    return () => {
      cancelled = true;
    };
  }, [query]);

  return (
    <div>
      <label htmlFor="job-search">Find a job</label>
      <input id="job-search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <p className="results-count">{results.length} jobs</p>
      <ul>
        {results.map((job) => (
          <li key={job.id}>
            {job.number} — {job.address}
          </li>
        ))}
      </ul>
    </div>
  );
}
