# aliyun-oss-loader

a webpack loader for uploading files to aliyun oss

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
                    accessKeySecret: 'xxxx',
                    path: 'folder/',
                    https: true
                }
            }
        ]
    }

```

## params

- `region`
> `String` Required
- `bucket` 
> `String` Required
- `accessKeyId`
> `String` Required
- `accessKeySecret`
> `String` Required
- `path` `String`
> default ''
- `https` `Boolean`
> default false


## License

MIT (http://www.opensource.org/licenses/mit-license.php)