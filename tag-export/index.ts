import task = require("azure-pipelines-task-lib");
import runScript from "./scripts/tag-export";

async function run() {
  try {
    const wsdir: string | undefined =
      task.getInput("wsdir", false) || task.getVariable("wsdir") || "./";
    const persist = task.getInput("persist")?.toLowerCase() === "true" || false;
    runScript(persist, wsdir);
  } catch (err: any) {
    task.setResult(task.TaskResult.Failed, err.message);
  }
}

run();
