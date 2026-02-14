"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Loader2 } from "lucide-react";

type Stats = {
    status: string;
    totalSolved: number;
    totalQuestions: number;
    easySolved: number;
    totalEasy: number;
    mediumSolved: number;
    totalMedium: number;
    hardSolved: number;
    totalHard: number;
    acceptanceRate: number;
    ranking: number;
    contributionPoints: number;
    submissionCalendar?: Record<string, number>;
};

export default function LeetCodeStats({
    username = "tanish1120",
}: {
    username?: string;
}) {
    const [data, setData] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function fetchStats() {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(
                    `https://leetcode-stats-api.herokuapp.com/${username}`,
                    { cache: "no-store" }
                );
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json = await res.json();
                if (!cancelled) setData(json as Stats);
            } catch (err: any) {
                if (!cancelled) setError(err.message || "Failed to load");
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        fetchStats();
        return () => {
            cancelled = true;
        };
    }, [username]);

    const longestStreak = useMemo(() => {
        if (!data?.submissionCalendar) return 0;
        const cal = data.submissionCalendar || {};
        const daysWithSub = new Set<string>();
        Object.entries(cal).forEach(([ts, count]) => {
            if (Number(count) > 0) {
                const d = new Date(Number(ts) * 1000).toISOString().slice(0, 10);
                daysWithSub.add(d);
            }
        });

        const dates = Array.from(daysWithSub).sort();
        let longest = 0;
        if (dates.length > 0) {
            let run = 1;
            longest = 1;
            for (let i = 1; i < dates.length; i++) {
                const prev = new Date(dates[i - 1]);
                const cur = new Date(dates[i]);
                const diff = Math.round((cur.getTime() - prev.getTime()) / (24 * 3600 * 1000));
                if (diff === 1) {
                    run++;
                } else {
                    run = 1;
                }
                if (run > longest) longest = run;
            }
        }
        return longest;
    }, [data]);

    return (
        <div className="relative">
            <div className="absolute -inset-1 bg-indigo-500 blur-2xl opacity-10 rounded-2xl" />

            <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <a
                            href={`https://leetcode.com/${username}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-zinc-400"
                        >
                            <p className="text-sm text-zinc-400">LeetCode — {username}</p>
                        </a>
                        <h3 className="text-2xl font-semibold text-indigo-300">
                            Problem Solving
                        </h3>
                        {longestStreak > 0 && (
                            <p className="text-sm text-amber-400 font-medium">Streak: {longestStreak} day{longestStreak !== 1 ? 's' : ''}</p>
                        )}
                    </div>

                    <div className="text-right">
                        {loading ? (
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Loader2 className="animate-spin" />
                                <span className="text-xs">Loading</span>
                            </div>
                        ) : error ? (
                            <p className="text-rose-400 text-sm">Error: {error}</p>
                        ) : (
                            <div className="flex flex-col items-end">
                                <a
                                    href={`https://leetcode.com/${username}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs text-zinc-400 underline"
                                >
                                    View profile
                                </a>

                                <p className="text-indigo-400 font-extrabold text-3xl">#{data?.ranking?.toLocaleString() ?? "-"}</p>
                                <p className="text-sm text-zinc-400">Global Rank</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Stats */}
                {!loading && data && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-zinc-800 rounded-lg p-4">
                            <p className="text-sm text-zinc-400">Total Solved</p>
                            <p className="text-2xl font-bold text-indigo-400">{data.totalSolved}</p>
                            {/* <p className="mt-1 text-xs text-zinc-400">of {data.totalQuestions} questions</p> */}
                        </div>

                        <div className="bg-zinc-800 rounded-lg p-4">
                            <p className="text-sm text-zinc-400">Acceptance Rate</p>
                            <p className="text-2xl font-bold text-indigo-400">{data.acceptanceRate}%</p>
                            {/* <p className="mt-1 text-xs text-zinc-400">Global rank shown above</p> */}
                        </div>

                        <div className="bg-zinc-800 rounded-lg p-4">
                            <p className="text-sm text-zinc-400">Contribution</p>
                            <p className="text-2xl font-bold text-indigo-400">{data.contributionPoints}</p>
                        </div>
                    </div>
                )}

                {/* Longest streak shown inline under Contribution (compact) */}
            </div>
        </div>
    );
}
