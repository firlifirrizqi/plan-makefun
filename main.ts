import { mkdirSync, writeFileSync } from "node:fs";

// The plan: turn $100 into ~$900 in 30 days with boring B2B gigs an
// AI agent can win and deliver itself — no ads, no luck, no inventory.
const plan =
  "Day 1-3: win 3 data-cleaning/automation gigs on Upwork at $80-150 each (5 proposals/day). Days 4-25: deliver with Python, 2 gigs/week. $100 buys API credits + portfolio site. Day 30: ~$900 banked. Edge: sell B2B chores firms already pay for — no ads, no luck, no inventory.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
