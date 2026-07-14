# staticReport

静态数据分析报告仓库。Cloudflare Pages 直接部署仓库根目录，无需构建命令。

## 目录约定

```text
index.html
reports/
  YYYY-MM-DD-report-name/
    index.html
    artifact.json
```

- 根目录 `index.html`：报告入口与归档索引。
- 每份报告使用独立目录，避免覆盖历史版本。
- `artifact.json`：生成静态报告所用的结构化快照与来源说明。

## 当前报告

- [2026-07-13 经营分析报告](reports/2026-07-13-operating-analysis/)

