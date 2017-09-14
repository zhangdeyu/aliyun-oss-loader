# aliyun-oss-loader

## usage

set config in your webpack file
``` javascript
    module: {
        loaders: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: '../index.js',
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