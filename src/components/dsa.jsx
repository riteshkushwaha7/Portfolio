import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfileStats() {
  const [data, setData] = useState({
    username: 'riteshkushwaha7',
    leetcode: null,
    codeforces: null,
    gfg: { totalSolved: '250+' }, 
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchLeetcodeStats = async () => {
      try {
        const res = await axios.get('https://profilestats.onrender.com/api/leetcode-stats'); 
        return res.data?.data?.matchedUser || null;
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
        return null;
      }
    };

    const fetchCodeforcesStats = async () => {
      try {
        const res = await axios.get('https://profilestats.onrender.com/api/codeforces-stats'); 
        return res.data || null;
      } catch (error) {
        console.error("Error fetching Codeforces data:", error);
        return null;
      }
    };

    const fetchAll = async () => {
      setData(prev => ({ ...prev, loading: true, error: null }));
      try {
        const [lc, cf] = await Promise.all([
          fetchLeetcodeStats(),
          fetchCodeforcesStats(),
        ]);
        setData(prev => ({
          ...prev,
          leetcode: lc,
          codeforces: cf,
          loading: false,
          error: null
        }));
      } catch (error) {
        console.error("Error fetching all data:", error);
        setData(prev => ({ ...prev, loading: false, error: "Failed to fetch data." }));
      }
    };

    fetchAll();
  }, []);

  const getLeetcodeCount = (difficulty) => {
    return data.leetcode?.submitStatsGlobal?.acSubmissionNum?.find(
      (d) => d.difficulty === difficulty
    )?.count || 0;
  };

  const totalLeetcodeSolved = getLeetcodeCount('Easy') + getLeetcodeCount('Medium') + getLeetcodeCount('Hard');

  if (data.loading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  if (data.error) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center text-red-600">{data.error}</div>;
  }

  return (
    <div id='dsa' className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 mb-8 text-center w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800">User: {data.username}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">LeetCode</h2>
          <div className="text-gray-600 space-y-2">
            <p>Easy: {getLeetcodeCount('Easy')}</p>
            <p>Medium: {getLeetcodeCount('Medium')}</p>
            <p>Hard: {getLeetcodeCount('Hard')}</p>
            <p className="font-medium">Total: {totalLeetcodeSolved}</p>
          </div>
          <div className="mt-6 w-full">
            <a
              href={`https://leetcode.com/${data.username}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-gray-400 text-white font-semibold rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Visit LeetCode
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Codeforces</h2>
          <div className="text-gray-600 space-y-2">
            <p>Handle: {data.codeforces?.handle || 'N/A'}</p>
            <p>Current Rating: {data.codeforces?.rating || 'N/A'}</p>
            <p>Rank: {data.codeforces?.rank || 'N/A'}</p>
             <p>Max Rating: {data.codeforces?.maxRating || 'N/A'}</p>
            <p>Max Rank: {data.codeforces?.maxRank || 'N/A'}</p>
            <p className="font-medium">Total Solved: {data.codeforces?.totalSolved || 'N/A'}</p>
          </div>
          <div className="mt-6 w-full">
            <a
              href={`https://codeforces.com/profile/${data.codeforces?.handle || 'riteshkushwaha7'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-gray-400 text-white font-semibold rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Visit Codeforces
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">GeeksforGeeks</h2>
          <div className="text-gray-600 space-y-2">
            <p>Total Solved: {data.gfg.totalSolved}</p>
          </div>
          <div className="mt-6 w-full">
            <a
              href={`https://auth.geeksforgeeks.org/user/${data.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-gray-400 text-white font-semibold rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Visit GFG
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}