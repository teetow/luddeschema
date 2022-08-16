<script lang="ts">
  import data, { type DayEvent } from "./schema";

  type DataType = typeof data;

  const sortTimestamps = (a: string, b: string) => {
    const [aH, aM] = a.split(":").map((n) => Number(n));
    const [bH, bM] = b.split(":").map((n) => Number(n));

    return aH * 60 + aM - (bH * 60 + bM);
  };

  const getStartTimes = (d: DataType) => {
    const slots = new Array<string>();

    return Object.entries(d)
      .reduce((acc, [day, events]) => {
        events.forEach((event) => {
          if (!acc.includes(event.start)) {
            acc.push(event.start);
          }
          if (!acc.includes(event.end)) {
            acc.push(event.end);
          }
        });
        return [...acc];
      }, [])
      .sort(sortTimestamps);
  };

  const startTimes = getStartTimes(data);
</script>

<div class="schema">
  {#each startTimes as time, i}
    <div class="rhead" style={`grid-row: ${i + 2}`}>
      {time}
    </div>
  {/each}

  {#each Object.entries(data) as [day, events], i}
    <div class={`cell colhead`} style={`grid-column: ${i + 2}; grid-row: 1`}>
      {day}
    </div>

    {#each events as event}
      <div
        class={`cell col-${i + 1} deco-${event.deco ? event.deco : "default"}`}
        style={`grid-column: ${i + 2}; grid-row: ${
          startTimes.indexOf(event.start) + 2
        } / ${startTimes.indexOf(event.end) + 2}`}
      >
        {event.label}
      </div>
    {/each}
  {/each}
</div>

<style>
  .schema {
    display: grid;
    justify-items: stretch;
    gap: 0.5rem;
  }

  .colhead {
    background-color: #852;
  }

  .cell {
    display: grid;
    justify-content: start;
    padding: 0.5rem;
    border-radius: 2px;
  }

  :global(.deco-default) {
    background-color: #333;
  }

  :global(.deco-blue) {
    background-color: #248;
  }

  :global(.deco-green) {
    background-color: #282;
  }

  :global(.deco-yellow) {
    background-color: #882;
  }
</style>
