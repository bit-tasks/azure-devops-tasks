# Azure DevOps Tasks
[View in Azure MarketPlace](https://marketplace.visualstudio.com/items?itemName=bitdev.bit-tasks)

## Contributor Guide

Steps to create custom tasks in different CI/CD platforms.

### AzureDevOps Task
- [AzureDevOps Demo Organization](https://dev.azure.com/bit-tasks/)
- [AzureDevOps Publisher Profile](https://marketplace.visualstudio.com/manage/publishers/bitdev)

Go to the task directory and build using NCC compiler. For example;
```
npm install
npm run build
git commit -m "Update task"
```

**Note:** After building the task, delete the node_modules directory. Otherwise it slows down the deployment.

From home directory
```
tfx extension publish -t <PERSONAL_ACCESS_TOKEN>
```

**Note:** --shared-with is needed until the extension is publically shared

#### Creatinga  UUID
To create a UUID for newly created tasks, you can use `uuidgen` command in Mac.

#### Pre-requisites
[Cross-platform CLI](https://github.com/microsoft/tfs-cli) for Azure DevOps to package your extensions. You can install tfx-cli by using npm, a component of Node.js, by running;

```
npm i -g tfx-cli
```

For each new task, create a GUID using;
- MacOS/Linux - uuidgen
- Windows (PowerShell) - New-Guid

### References
- [Extension manifest reference (vss-extension.json)](https://learn.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops)
- [Add a custom pipelines task extension](https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-build-task?view=azure-devops)
- [Personal access token](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows)
