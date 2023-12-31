import task = require("azure-pipelines-task-lib");
import runInit from "./scripts/init";

async function run() {
  try {
    const wsdir: string | undefined = task.getInput("wsdir", false) || "./";
    if (
      !process.env.BIT_CONFIG_USER_TOKEN &&
      !process.env.BIT_CLOUD_ACCESS_TOKEN
    ) {
      task.setResult(
        task.TaskResult.Failed,
        "Neither BIT_CONFIG_USER_TOKEN nor BIT_CLOUD_ACCESS_TOKEN environment variable is set. At least one of them is required!"
      );
      return;
    }
    runInit(wsdir);
  } catch (err: any) {
    task.setResult(task.TaskResult.Failed, err.message);
  }
}

run();
