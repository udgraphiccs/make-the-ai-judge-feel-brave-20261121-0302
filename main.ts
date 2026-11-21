import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The lamp in the window is still on. Rain taps the roof in ones and twos, and somewhere a kettle hums low, in no hurry at all. Nothing here needs deciding tonight. The chair by the fire keeps your place, warm as a held hand, and the dark outside is only weather.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
