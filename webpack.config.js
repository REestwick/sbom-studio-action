import path from "path";

module.exports = {
  entry: './index.js', // Entry point for the action code
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'index.js', // Bundled output file
    libraryTarget: 'umd', // Universal Module Definition (works with Node, AMD, and CommonJS)
  },
  mode: 'production', // Bundle for production (minification, etc.)
  target: 'node', // GitHub Actions runs in a Node.js environment
};