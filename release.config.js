export default {
  branches: "main",
  repositoryUrl: "https://github.com/yuvrajdahal/vite-action",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
