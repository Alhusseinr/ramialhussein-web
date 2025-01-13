import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import CopyWebpackPlugin from "copy-webpack-plugin";


interface Configuration extends WebpackConfiguration {
    devServer?: DevServerConfiguration;
  }

const config: Configuration = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'boundle.js',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: "public", 
                    to: ".",
                    globOptions: {
                        ignore: [
                            "**/index.html"
                        ]
                    }
                },
            ],
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        static: {
          directory: path.join(__dirname, 'dist'),
        },
      },
} as Configuration & { devServer: DevServerConfiguration };

export default config;