# aliyun-oss-loader

## usage
- npm install aliyun-oss-loader --save-dev

- set config in your webpack file

``` javascript
    module: {
        loaders: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'aliyun-oss-loader',
                options: {
                    region: 'xxxxxxxxx',
                    bucket: 'xxxxxx',
                    accessKeyId: 'xxxxx',
                    accessKeySecret: 'xxxx'
                }
            }
        ]
    }

```


## License

MIT (http://www.opensource.org/licenses/mit-license.php)