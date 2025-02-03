import path from 'path';

export default {
  entry: './index.js',  // The entry point of your action
  output: {
    filename: 'index.js',  // Output file in the dist folder
    path: path.resolve('dist'),
    libraryTarget: 'module',  // Output as an ES module
    chunkFormat: 'module',    // Ensure all chunks are ES modules
  },
  target: 'node',            // Set target to Node.js (since GitHub Actions uses Node)
  experiments: {
    outputModule: true,      // Ensure Webpack outputs ES modules
    topLevelAwait: true
  },
  resolve: {
    extensions: ['.js'],     // Resolve .js files for ES modules
  },
  mode: 'production',        // Minify for production
};