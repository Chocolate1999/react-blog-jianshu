import { createGlobalStyle } from 'styled-components';
/* 使用 reset.css 设置默认样式*/
createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1602593143919'); /* IE9 */
  src: url('./iconfont.eot?t=1602593143919#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQ0AAsAAAAACFAAAAPoAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEEINgATYCJAMQCwoABCAFhG0HQxtNB8gekiRFgggUKKAAEEuXePja7/Xc3X0/G0IFClBmogDHh1UUcFUlkKxqha8SaCQrIFmdoTb1gCpUjLRzZlZTh+RIiZGRq0k6d6Ez/bmU/7/Pczm9+Tyw+e0slzWX9eLDAOOtge3pCyQOSxgbxq68iOsEOowbAdtOTM8HNgpjXiDuCWoW2KRcSo0gVGurZGsRr0Cjphf4FQC89H8ff4Bv2JA0mXHTzkWCCkR/t3vzmuj43+E4m8Gz8QJgu8hYABTiqjR0gghLCwgdymgLS4CqSow1EPjm9f9IsxdTNf/ySEImWgxTF2IXy5nvdjZH4nsgR/D9tUuGdLFUWHkN+AfZ0XsXSap1uFPRNXLCkTyyyye1VEnpvN7kEo9i9jA1GeiIjrfkpGuYuajI7D8ovGDPBvBsIzX5NIY9dCs8LmP37hXeuZN/927BZDmqwK0gr0mWi1KKfP7evWZynde4ZkfPeYfISUMORI+4c4emjwwZMWchPZea7D7/dBS1dvDdl0Xyw97u5k01d54VzlH0LMxfPG+dG5eHby3LYfPd996lqfnycFmm53ad4JNuDom/CR3+n2zd00RmFeCxnBApW/yONKGzwV6Y5YanOLRQsK+g0qJDX1UWocvd6N/dB34c2Bt4f9vwGMJlI1EcPvPUqVmEKXftxEyqjI+JQ55dED7auaMgYOaHZN66xUxgOU7gZrwTKTw5/HCw/KGDyP42UAgOcwm+yrj14pbu2BXSFD7f4XiQa2b4qGS/WpWN/QMsvwd+7ka65cD75w9v2ssXDLZSfKZTju91E2Isn82MyT16VEyHLtvdRutSD+yJzbGZFtIZKG3clDpuh8Kv8h6+zWqBhcr/Xb+VZSXZwAjgLvGW8OXurONE9H87CpGf//Npnmy2mKocw//bUBed/bj5VD3WtTP7cerW6j/sKKCG+KtTtYa7FFlju+5o6WLX4HMSOnTgv9YY8GQM8/AMKjdSDcdI2owhqybIwi6g0WkRLdUaOsxL2t1pkIQQpR1zxgKEPtuR9HiDrM9VsrCP0RjxFi19QaDDUbge2WkqBDJOgiyCKoZrZASlaOAtLyKD+lyortWxUlLrCwuhZBKyjI+nd7aaBA1QGmOFqU7tixDP8JKoZxLBbVCnExmjJGqgEnnWIGQM9fLiy17kqRT1gLRFArEQSIXBacQQKIkMeLc1Qua+nwtSq6XDkmp4FdlCkMREGJ7hw5N3CzLJZGjFu5bRJnXUfCEIj2fxJCI9RiIMQDqzJGIYyydpQEqIp5oeBaNQXqgZ39bkOb9F/4TboINxZIkUOUo00gZL8qxBrWI1gjvGurFWz4qcAAA=') format('woff2'),
  url('./iconfont.woff?t=1602593143919') format('woff'),
  url('./iconfont.ttf?t=1602593143919') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1602593143919#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;