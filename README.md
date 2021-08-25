# css-variables-benchmark

This is simple CSS variables benchmark generator. It generates `n` colored squares in two flavors, one with classic CSS and other using CSS variables. 

Clone and:

```bash
yarn 
yarn start [number of colors]
```

You should get two files in `bundle` directory.

* `dynamic.html`
* `static.html`

Now use your browser` [tools](https://developer.chrome.com/docs/devtools/evaluate-performance/) to benchmark which runs faster.

You can use `VSC` [Go Live](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plugin to run it in browser.
