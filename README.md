VSCodeでデバッグ実行する際のlaunch.jsonサンプル
.vscode/launch.json　を作成して内容は以下を参照してください。
```json
{
    "version": "0.2.0",
    "compounds": [
      {
        "name": "Main + Renderer",
        "configurations": ["Main", "Renderer"],
        "stopAll": true
      }
    ],
    "configurations": [
      {
        "name": "Main",
        "type": "node",
        "request": "launch",
        "cwd": "${workspaceFolder}",
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
        "windows": {
          "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
        },
        "args": [".", "--remote-debugging-port=9222"],
        "outputCapture": "std",
        "console": "integratedTerminal",
        "presentation": {
          "hidden": true,
        }
      },
      {
        "name": "Renderer",
        "port": 9222,
        "request": "attach",
        "type": "pwa-chrome",
        "webRoot": "${workspaceFolder}",
        "sourceMaps": true,
        "resolveSourceMapLocations": [
          "${workspaceFolder}/**",
          "!**/node_modules/**"
        ],
        "targetSelection": "pick"
      }
    ]
}
```
デバッグ時は Main + renderer を選択して実行します。

