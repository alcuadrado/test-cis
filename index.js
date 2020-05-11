const os = require("os");
const ci = require("ci-info");

console.log(`
ci-info.isCi: ${ci.isCI}
isGithubActions: ${process.env.GITHUB_ACTIONS !== undefined}
isLinuxWithoutDisplayServer: ${isLinuxWithoutDisplayServer()}
`);

function isLinuxWithoutDisplayServer() {
  if (os.type() !== "Linux") {
    return false;
  }

  if (process.env.DISPLAY !== undefined) {
    return false;
  }

  if (process.env.WAYLAND_DISPLAY !== undefined) {
    return false;
  }

  return true;
}
