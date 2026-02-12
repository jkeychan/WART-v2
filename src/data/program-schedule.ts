/**
 * wART Program Schedule – extracted from Program Log 26 December 2025
 * Source: https://www.wartfm.org/program-schedule
 */

export interface ScheduleEntry {
  time: string;
  show: string;
}

export const scheduleByDay: Record<string, ScheduleEntry[]> = {
  Sunday: [
    { time: "6:00 AM", show: "Incredible Music" },
    { time: "7:00 AM", show: "Songs of Faith and Hope (55 min)" },
    { time: "8:00 AM", show: "Surf Report (60 min)" },
    { time: "9:00 AM", show: "Jazz with David Basse (60 min)" },
    { time: "10:00 AM", show: "All That's Jazz (2 hrs)" },
    { time: "12:00 PM", show: "50 Ways to Weave Your Covers (60 min) – Gray Wheeler + DJ Erik Mattox" },
    { time: "1:00 PM", show: "Latino 2025" },
    { time: "1:30 PM", show: "Music Improv with Steve (30 min)" },
    { time: "2:00 PM", show: "Corn Talk (Dana and Matt) (60 min)" },
    { time: "4:00 PM", show: "Songs for Aging Children (60 min)" },
    { time: "5:00 PM", show: "Songs of Faith and Hope (55 min)" },
    { time: "6:00 PM", show: "What's New" },
    { time: "7:00 PM", show: "Paul Gurewitz – Great Music Show (2 hrs)" },
    { time: "8:00 PM", show: "Sunday Classics with Mark Powell (Classical Music – 1 hr)" },
    { time: "8:00 PM", show: "Yours Truly, Johnny Dollar – Classic Radio Show" },
    { time: "8:30 PM", show: "All That's Jazz" },
    { time: "9:00 PM", show: "Surf Report (60 min)" },
    { time: "10:00 PM", show: "Incredible Music" },
  ],
  Monday: [
    { time: "6:00 AM", show: "Incredible Music" },
    { time: "7:00 AM", show: "Voices from Latino Neighbors" },
    { time: "8:00 AM", show: "LD with Fresh Brew for You (2 hrs)" },
    { time: "10:00 AM", show: "Incredible Music" },
    { time: "10:30 AM", show: "What's New" },
    { time: "12:00 PM", show: "Overheard Freeform by D.J. Wilderness" },
    { time: "2:00 PM", show: "Incredible Music" },
    { time: "4:00 PM", show: "Paul Gurewitz – Great Music Show (2 hrs)" },
    { time: "6:00 PM", show: "Memories with Jerry Plemmons (60 min)" },
    { time: "7:00 PM", show: "The Good Kind with Michael B (90 min)" },
    { time: "8:00 PM", show: "Madison County Audio Archives with Dee Scott (60 min)" },
    { time: "8:00 PM", show: "Adventures in Listening with Gary Parkey (2 hrs)" },
    { time: "9:00 PM", show: "Friend FM with Landon George (2 hrs)" },
  ],
  Tuesday: [
    { time: "6:00 AM", show: "Incredible Music" },
    { time: "7:00 AM", show: "Incredible Music" },
    { time: "8:00 AM", show: "Jim Thorsen – Thor in the Morn (2 hrs)" },
    { time: "10:00 AM", show: "Jim Thorsen – Themed Show (60 min)" },
    { time: "11:00 AM", show: "Incredible Music" },
    { time: "12:00 PM", show: "Wild Mountain Time with Taylor Hill (60 min)" },
    { time: "1:00 PM", show: "Music Improv with Steve (30 min)" },
    { time: "1:30 PM", show: "Yours Truly, Johnny Dollar / Suspense (30 min)" },
    { time: "2:00 PM", show: "Mortal Coil with Sara Melosh (2 hrs)" },
    { time: "4:00 PM", show: "Words and Music with Joel! (2 hrs)" },
    { time: "6:00 PM", show: "The Good Kind with Michael B (90 min)" },
    { time: "7:30 PM", show: "Blues Alley (60 min)" },
    { time: "8:00 PM", show: "Incredible Music" },
    { time: "9:00 PM", show: "Experiment #1 Eclectic Music" },
  ],
  Wednesday: [
    { time: "6:00 AM", show: "Incredible Music" },
    { time: "7:00 AM", show: "Incredible Music" },
    { time: "8:00 AM", show: "Wednesday Wake Up! (60 min) – Justin Anderson" },
    { time: "9:00 AM", show: "Jazz with David Basse (60 min)" },
    { time: "10:00 AM", show: "The International Americana Music Show (1 hr)" },
    { time: "11:00 AM", show: "Incredible Music" },
    { time: "12:00 PM", show: "Buttered Popcorn Music Bucket with Mick Glasgow (60 min)" },
    { time: "1:00 PM", show: "Yours Truly, Johnny Dollar" },
    { time: "1:30 PM", show: "Suspense (30 min)" },
    { time: "2:00 PM", show: "The Best Bands You've Never Heard of with Elizabeth Martin (2 hrs)" },
    { time: "4:00 PM", show: "Unreserved (60 min)" },
    { time: "5:00 PM", show: "Paul Gurewitz – Great Music Show (2 hrs)" },
    { time: "6:00 PM", show: "Paul G's Show Continues" },
    { time: "8:00 PM", show: "Wrap your Troubles in Dream with Sarah Jamison (60 min)" },
    { time: "8:30 PM", show: "Wind Down Wednesday with Bootstrap Kat (60 min)" },
    { time: "9:00 PM", show: "What in the World (60 min)" },
  ],
  Thursday: [
    { time: "6:00 AM", show: "What's New (60 min)" },
    { time: "7:00 AM", show: "Incredible Music" },
    { time: "8:00 AM", show: "The County Line with AB Tech's Sherri Davis and Andrew McKinney (60 min)" },
    { time: "9:00 AM", show: "Incredible Music" },
    { time: "10:00 AM", show: "Hear the World (African Rhythms – 1 hr)" },
    { time: "11:00 AM", show: "Jerry's Memories (60 min)" },
    { time: "12:00 PM", show: "Jams from the Mason Jar with DJ Mason (60 min)" },
    { time: "1:00 PM", show: "Baby Cousins Radio Hour (60 min)" },
    { time: "2:00 PM", show: "Surf Report (60 min)" },
    { time: "4:00 PM", show: "Incredible Music" },
    { time: "5:00 PM", show: "Your Rock'n Ride @ 5 with Brother Brown (60 min)" },
    { time: "6:00 PM", show: "Supper Sounds with Brother Brown (120 min)" },
    { time: "8:00 PM", show: "Supper Sounds with DJ Downtown Brother Brown (120 min)" },
    { time: "8:00 PM", show: "Songs for Aging Children (60 min)" },
    { time: "9:00 PM", show: "Overheard Freeform by D.J. Wilderness (2 hrs)" },
  ],
  Friday: [
    { time: "6:00 AM", show: "Incredible Music" },
    { time: "7:00 AM", show: "Voices from Latino Neighbors" },
    { time: "8:00 AM", show: "Je T'aime in the Morning (120 min) – Jaime Perkins" },
    { time: "8:00 AM", show: "Yours Truly, Johnny Dollar (Old Radio Show – 30 min)" },
    { time: "9:00 AM", show: "Country State of Mind (60 min)" },
    { time: "10:30 AM", show: "Hot Mic with Houston and Hogan (25 min)" },
    { time: "11:00 AM", show: "Unreserved (60 min)" },
    { time: "12:00 PM", show: "Jams from the Mason Jar with DJ Mason (2 hrs)" },
    { time: "2:00 PM", show: "What in the World (60 min)" },
    { time: "4:00 PM", show: "The Scumbag Files" },
    { time: "5:00 PM", show: "Incredible Music" },
    { time: "6:00 PM", show: "Incredible Music" },
    { time: "6:30 PM", show: "The Island with Dub Tractor (90 min)" },
    { time: "8:00 PM", show: "Adventures in Listening with Gary Parkey (2 hrs)" },
    { time: "9:00 PM", show: "Deep Cuts with Rick (60 min)" },
    { time: "9:00 PM", show: "Jim's Theme Show (60 min)" },
    { time: "9:00 PM", show: "Magic Mushroom Hours (2 hrs)" },
  ],
  Saturday: [
    { time: "6:00 AM", show: "Incredible Music" },
    { time: "7:00 AM", show: "Incredible Music" },
    { time: "8:00 AM", show: "Yours Truly, Johnny Dollar (Old Radio Show – 30 min)" },
    { time: "9:00 AM", show: "Country State of Mind (60 min)" },
    { time: "10:30 AM", show: "Hot Mic with Houston and Hogan (25 min)" },
    { time: "11:00 AM", show: "Unreserved (60 min)" },
    { time: "12:00 PM", show: "Let's Go Local (60 min)" },
    { time: "1:00 PM", show: "The Scumbag Files (60 min)" },
    { time: "2:00 PM", show: "Overheard Freeform by D.J. Wilderness (2 hrs)" },
    { time: "4:00 PM", show: "Hear the World (African Rhythms – 1 hr)" },
    { time: "5:00 PM", show: "Bossa Brazil (60 min)" },
    { time: "6:00 PM", show: "Buttered Popcorn Music Bucket with Mick Glasgow (60 min)" },
    { time: "9:00 PM", show: "Turning the Tables with Drew Dobbs (60 min)" },
    { time: "9:00 PM", show: "Supper Sounds with DJ Downtown Brother Brown" },
    { time: "10:00 PM", show: "Deep Cuts with Rick (60 min)" },
    { time: "10:00 PM", show: "Turning the Tables with Drew Dobbs (60 min)" },
  ],
};

export const pdfScheduleUrl = "https://www.wartfm.org/_files/ugd/9c02b1_3f612f1cc5aa4ac7a8e830756808e47f.pdf";

/** Time order for display (6am–11pm prime time first, then overnight) */
const TIME_ORDER = [
  "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "10:30 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "1:30 PM", "2:00 PM", "3:00 PM", "3:30 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "10:00 PM", "11:00 PM",
  "12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM",
];

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function buildFullWeekGrid(): Map<string, Record<string, string[]>> {
  const grid = new Map<string, Record<string, string[]>>();
  for (const day of DAYS) {
    for (const { time, show } of scheduleByDay[day]) {
      const t = time.trim();
      if (!grid.has(t)) {
        grid.set(t, Object.fromEntries(DAYS.map((d) => [d, []])) as Record<string, string[]>);
      }
      grid.get(t)![day].push(show);
    }
  }
  return grid;
}

const grid = buildFullWeekGrid();
const allTimes = [...new Set([...TIME_ORDER, ...grid.keys()])].sort(
  (a, b) => {
    const ia = TIME_ORDER.indexOf(a);
    const ib = TIME_ORDER.indexOf(b);
    if (ia >= 0 && ib >= 0) return ia - ib;
    if (ia >= 0) return -1;
    if (ib >= 0) return 1;
    return a.localeCompare(b);
  }
);

/** Single weekly grid: one row per time, one column per day */
export const fullWeekSchedule = allTimes
  .filter((time) => DAYS.some((d) => (grid.get(time)?.[d]?.length ?? 0) > 0))
  .map((time) => ({
    time,
    cells: Object.fromEntries(DAYS.map((d) => [d, grid.get(time)?.[d] ?? []])),
  }));

/** FullCalendar event format (concrete start/end) */
export interface FullCalendarEvent {
  title: string;
  start: string;
  end: string;
}

const DAY_TO_NUM: Record<string, number> = {
  Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6,
};

function parseTimeToMinutes(timeStr: string): number {
  const m = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!m) return 6 * 60;
  let h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  if (m[3].toUpperCase() === "PM" && h !== 12) h += 12;
  if (m[3].toUpperCase() === "AM" && h === 12) h = 0;
  return h * 60 + min;
}

function parseDurationMins(show: string): number {
  const m2 = show.match(/\((\d+)\s*hrs?\)/i);
  if (m2) return parseInt(m2[1], 10) * 60;
  const m1 = show.match(/\((\d+)\s*min(?:utes?)?\)/i);
  if (m1) return parseInt(m1[1], 10);
  const m120 = show.match(/\(120\s*min\)/i);
  if (m120) return 120;
  return 60;
}

/** Convert schedule to FullCalendar events (concrete dates for next 8 weeks) */
export function toFullCalendarEvents(): FullCalendarEvent[] {
  const events: FullCalendarEvent[] = [];
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayOfWeek = today.getDay();
  const thisSunday = new Date(today);
  thisSunday.setDate(today.getDate() - dayOfWeek);

  for (let week = 0; week < 8; week++) {
    for (let d = 0; d < 7; d++) {
      const date = new Date(thisSunday);
      date.setDate(thisSunday.getDate() + week * 7 + d);
      const dateStr = date.toISOString().slice(0, 10);
      const dayName = DAYS[d];

      for (const { time, show } of scheduleByDay[dayName]) {
        const startMins = parseTimeToMinutes(time);
        const dur = parseDurationMins(show);
        const startH = Math.floor(startMins / 60);
        const startMin = startMins % 60;
        const endMins = startMins + dur;
        const endH = Math.floor(endMins / 60) % 24;
        const endMin = endMins % 60;
        const spansMidnight = endMins >= 24 * 60;
        const endDateStr = spansMidnight
          ? (() => {
              const next = new Date(date);
              next.setDate(next.getDate() + 1);
              return `${next.toISOString().slice(0, 10)}T${endH.toString().padStart(2, "0")}:${endMin.toString().padStart(2, "0")}:00`;
            })()
          : `${dateStr}T${endH.toString().padStart(2, "0")}:${endMin.toString().padStart(2, "0")}:00`;

        events.push({
          title: show,
          start: `${dateStr}T${startH.toString().padStart(2, "0")}:${startMin.toString().padStart(2, "0")}:00`,
          end: endDateStr,
        });
      }
    }
  }

  return events;
}
