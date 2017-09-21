# aliyun-oss-loader

a webpack loader for uploading files to aliyun oss

![v](https://img.shields.io/npm/v/aliyun-oss-loader.svg) ![dw](https://img.shields.io/npm/dw/aliyun-oss-loader.svg) ![dm](https://img.shields.io/npm/dm/aliyun-oss-loader.svg) ![dy](https://img.shields.io/npm/dy/aliyun-oss-loader.svg) ![l](https://img.shields.io/npm/l/aliyun-oss-loader.svg)

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
                    name: 'folder/[name].[hash].[ext]',
                    https: true,
                    domain: 'img.xxx.com'
                }
            }
        ]
    }

```

## params

- `region`
    - `String` Required

- `bucket`
    -  `String` Required

- `accessKeyId`
    - `String` Required

- `accessKeySecret`
    - `String` Required

- `name`
    - `String` Optional default '[name].[hash].[ext]'

- `https`
    - `Boolean` Optional default false
- `domain`
    - `String` Optional support customize domain name