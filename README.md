# css-variables-benchmark

This is simple CSS variables benchmark generator. It generates `n` colored squares in two flavors, one with classic CSS and other using CSS variables. 

> Note: colors are reused once for better benchmarking.

Clone and:

```bash
yarn 
yarn start [number of colors]
```

You should get two files in `bundle` directory.

* `dynamic.html`
* `static.html`

Now use your browser` [tools](https://developer.chrome.com/docs/devtools/evaluate-performance/) to benchmark which runs faster.

## Running web server

You can use `VSC` [Go Live](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plugin to run it in browser.

Or...

You can install `http-server`

```bash
npm install -g http-server
cd bundle
http-server ./
```

## Build

You can build this repo to run it faster:

```bash
yarn build
node dist/index.js -- 666
```

## Results (2021-08-25)

5000 colors, reused once. Guest profile, no browser add-ons at all. 

```
Linux 
Google Chrome Version 92.0.4515.159 (Official Build) (64-bit)
```

### Static CSS

| Try | Loading | Scripting | Rendering | Painting | System | Idle  | Total |
| --- | ------- | --------- | --------- | -------- | ------ | ----- | ----- |
| 1   | 33      | 4         | 329       | 17       | 110    | 4948  | 5441  |
| 2   | 31      | 3         | 317       | 12       | 113    | 4928  | 5404  |
| 3   | 28      | 3         | 351       | 19       | 117    | 4950  | 5468  |
| 4   | 29      | 4         | 314       | 14       | 117    | 4943  | 5421  |
| 5   | 31      | 4         | 332       | 18       | 112    | 4944  | 5441  |
| SUM | 152     | 18        | 1643      | 80       | 569    | 24713 | 27175 |

### Dynamic CSS

|     | Loading | Scripting | Rendering | Painting | System | Idle  | Total |
| --- | ------- | --------- | --------- | -------- | ------ | ----- | ----- |
| 1   | 33      | 3         | 381       | 16       | 110    | 4906  | 5449  |
| 2   | 38      | 2         | 358       | 20       | 114    | 4962  | 5494  |
| 3   | 36      | 2         | 371       | 24       | 106    | 4978  | 5517  |
| 4   | 36      | 2         | 321       | 11       | 106    | 4934  | 5410  |
| 5   | 33      | 3         | 353       | 22       | 108    | 4977  | 5496  |
| SUM | 176     | 12        | 1784      | 93       | 544    | 24757 | 27366 |


## Conclusion

As you can see using `CSS variables` on **10 000** elements is **0.7%** slower than raw CSS.

This is very simple usage case. You might want to create your own more advanced benchmarks. Feel free to fork this code.
