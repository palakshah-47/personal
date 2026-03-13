/*
  Problem:
  Given a set of async tasks with dependencies and a concurrency limit,
  implement a scheduler that runs tasks respecting both the dependency order
  and the max number of tasks that can run at the same time.
*/

// --- Job Definitions ---

function runJobA(onComplete) { onComplete(); }
function runJobD(onComplete) { onComplete(); }
function runJobE(onComplete) { onComplete(); }

function runJobB(onComplete) {
  setTimeout(onComplete, 2000);
}

function runJobC(onComplete) {
  setTimeout(onComplete, 200);
}

// --- Task Graph ---
// Each task declares its prerequisites and the function to run.
//
//  jobA ──┐
//         ├──► jobD ──┐
//  jobB ──┘           ├──► jobE
//  jobC ──────────────┘

const taskGraph = {
  jobA: { prerequisites: [],             action: runJobA },
  jobB: { prerequisites: [],             action: runJobB },
  jobC: { prerequisites: [],             action: runJobC },
  jobD: { prerequisites: ['jobA', 'jobB'], action: runJobD },
  jobE: { prerequisites: ['jobC', 'jobD'], action: runJobE },
};

// --- Scheduler ---

function scheduler(taskGraph, concurrencyLimit) {
  // remainingDeps[task] = number of prerequisites not yet completed
  const remainingDeps = {};

  // dependents[task] = list of tasks that depend on this task
  const dependents = {};

  // Build the dependency counts and reverse-dependency map
  for (const task in taskGraph) {
    remainingDeps[task] = taskGraph[task].prerequisites.length;

    for (const prereq of taskGraph[task].prerequisites) {
      if (!dependents[prereq]) dependents[prereq] = [];
      dependents[prereq].push(task);
    }
  }

  // Seed the queue with tasks that have no prerequisites
  const readyQueue = Object.keys(remainingDeps).filter(
    (task) => remainingDeps[task] === 0
  );

  const running = new Set();

  return new Promise((resolve, reject) => {
    function schedule() {
      // Launch as many ready tasks as the concurrency limit allows
      while (running.size < concurrencyLimit && readyQueue.length > 0) {
        const task = readyQueue.shift();
        running.add(task);

        try {
          taskGraph[task].action(() => onTaskComplete(task));
        } catch (error) {
          reject(error);
          return;
        }
      }

      // All tasks finished
      if (running.size === 0 && readyQueue.length === 0) {
        resolve();
      }
    }

    function onTaskComplete(task) {
      console.log(`Completed: ${task}`);
      running.delete(task);

      // Unlock any tasks that were waiting on this one
      for (const dependent of dependents[task] ?? []) {
        remainingDeps[dependent]--;
        if (remainingDeps[dependent] === 0) {
          readyQueue.push(dependent);
        }
      }

      schedule();
    }

    schedule();
  });
}

// --- Run ---

scheduler(taskGraph, 2)
  .then(() => console.log('All tasks completed successfully.'))
  .catch((error) => console.error('Scheduler failed:', error));
