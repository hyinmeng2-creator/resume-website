# 黄茵梦个人简历官网

这是一个可直接运行的静态个人简历网站，使用 HTML、CSS、TailwindCSS CDN 与少量原生 JavaScript。

## 本地预览

直接双击 `index.html` 即可浏览。为获得与线上一致的效果，也可以在本目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 在 GitHub 新建公开仓库，例如 `resume-website`。
2. 将本目录全部文件上传到仓库根目录。
3. 打开仓库 `Settings` → `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/ (root)`，点击 `Save`。
6. 等待约 1–3 分钟，GitHub 会生成可公开访问的网址。

## 内容修改

- 页面文字与链接：编辑 `index.html`。
- 颜色、间距和动效：编辑 `styles.css`。
- 导航与滚动渐入：编辑 `script.js`。
- 更新简历：用同名文件替换 `huang-yinmeng-resume.pdf`，下载按钮无需修改。

## 技术说明

TailwindCSS 与 Google Fonts 通过 CDN 加载，首次打开需要联网；其余页面功能均为纯静态文件，无需构建工具。
