export type DayEvent = {
  start: string;
  end: string;
  label: string;
  organizer?: string;
  deco?: string;
};

const data = {
  Monday: [
    { start: "8:15", end: "8:30", label: "Samling", organizer: "Åsa" },
    { start: "8:30", end: "9:10", label: "Matematik", organizer: "Åsa" },
    { start: "9:10", end: "9:30", label: "Rast", deco: "blue" },
    { start: "9:30", end: "10:15", label: "Svenska", organizer: "Åsa" },
    { start: "10:20", end: "11:00", label: "Musik", organizer: "Olivia", deco: "yellow" },

    { start: "11:00", end: "11:45", label: "Lunch", deco: "blue" },

    { start: "11:45", end: "12:30", label: "NO", organizer: "Desirée" },
    { start: "12:30", end: "12:50", label: "Rast", deco: "blue" },
    { start: "12:50", end: "13:30", label: "NO", organizer: "Desirée" },
  ],

  Tuesday: [
    { start: "8:15", end: "8:30", label: "Samling", organizer: "Åsa" },
    { start: "8:30", end: "9:10", label: "Matematik", organizer: "Åsa" },
    { start: "9:10", end: "9:30", label: "Rast", deco: "blue" },
    { start: "9:30", end: "11:00", label: "Svenska", organizer: "Åsa" },

    { start: "11:00", end: "11:45", label: "Lunch", deco: "blue" },

    { start: "11:45", end: "12:30", label: "Engelska", organizer: "Agneta" },
    { start: "12:30", end: "12:50", label: "Rast", deco: "blue" },
    { start: "12:50", end: "13:30", label: "Elevens val", organizer: "Agneta" },
  ],

  Wednesday: [
    { start: "8:15", end: "8:30", label: "Samling", organizer: "Åsa" },
    { start: "8:30", end: "9:10", label: "Matematik", organizer: "Åsa" },
    { start: "9:10", end: "9:30", label: "Rast", deco: "blue" },
    { start: "9:30", end: "11:00", label: "Svenska", organizer: "Åsa" },

    { start: "11:00", end: "11:45", label: "Lunch", deco: "blue" },

    { start: "11:45", end: "12:50", label: "Idrott", organizer: "Thomas", deco: "green" },
    { start: "13:05", end: "13:30", label: "Rast", deco: "blue" },
  ],
  Thursday: [
    { start: "8:15", end: "8:30", label: "Samling", organizer: "Åsa" },
    { start: "8:30", end: "9:10", label: "Matematik", organizer: "Åsa" },
    { start: "9:10", end: "9:30", label: "Rast", deco: "blue" },
    { start: "9:30", end: "11:00", label: "Svenska", organizer: "Åsa" },

    { start: "11:00", end: "11:45", label: "Lunch", deco: "blue" },

    { start: "11:45", end: "12:30", label: "SO", organizer: "Åsa" },
    { start: "12:30", end: "12:50", label: "Rast", deco: "blue" },
    { start: "12:50", end: "13:30", label: "SO", organizer: "Åsa" },
  ],
  Friday: [
    { start: "8:15", end: "8:30", label: "Samling", organizer: "Åsa" },
    { start: "8:30", end: "9:10", label: "Matematik", organizer: "Åsa" },
    { start: "9:10", end: "9:30", label: "Rast", deco: "blue" },
    { start: "9:30", end: "10:15", label: "Svenska", organizer: "Åsa" },
    { start: "10:20", end: "11:00", label: "SO", organizer: "Åsa" },

    { start: "11:00", end: "11:45", label: "Lunch", deco: "blue" },

    { start: "11:45", end: "12:30", label: "Skapande", organizer: "Åsa" },
    { start: "12:30", end: "12:50", label: "Rast", deco: "blue" },
    { start: "12:50", end: "13:30", label: "Skapande", organizer: "Åsa" },
  ],
} as Record<string, DayEvent[]>;

export default data;
