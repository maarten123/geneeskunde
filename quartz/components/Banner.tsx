import { QuartzComponentConstructor, QuartzComponentProps } from "./types"


function Banner({ fileData, displayClass }: QuartzComponentProps) {
      return <img src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%" class={`banner ${displayClass ?? ""}`}></img>
  }


  Banner.css = `
  .banner {
    margin: 2rem 0 0 0;
    max-height: 80px;
    z-index: 1;
  }
  `

export default (() => Banner) satisfies QuartzComponentConstructor

/*
function Banner({ fileData, displayClass }: QuartzComponentProps) {
    const banner = fileData.frontmatter?.banner
    if (banner) {
      return <h1 class={`article-title ${displayClass ?? ""}`}>{banner}</h1>
    } else {
      return null
    }
  } */