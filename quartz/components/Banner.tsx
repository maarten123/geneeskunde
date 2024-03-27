import { QuartzComponentConstructor, QuartzComponentProps } from "./types"


function Banner({ fileData, displayClass }: QuartzComponentProps) {
    const title = fileData.frontmatter?.title
    if (title) {
      return <h1 class={`article-title ${displayClass ?? ""}`}>{title}</h1>
    } else {
      return null
    }
  }
  Banner.css = `
  .article-title {
    margin: 2rem 0 0 0;
  }
  `

export default (() => Banner) satisfies QuartzComponentConstructor