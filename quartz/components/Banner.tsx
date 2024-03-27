import { QuartzComponentConstructor, QuartzComponentProps } from "./types"


function Banner({ fileData, displayClass }: QuartzComponentProps) {
    const ban = fileData.frontmatter?.banner as string;
    if (ban) {
        return <img id="bannerImage" src={ban} width="100%" className={`banner ${displayClass ?? ""}`} />;      }
        else {
        return null
      }
}

  /*
  var imageUrls = [
    "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554034483-04fda0d3507b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1548504778-b14db6c34b04?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
 */

/*
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  var imageUrl = imageUrls[randomIndex];
  */


  Banner.css = `
  .banner {
    margin: 2rem 0 0 0;
    height: 80px;
    z-index: 1;
    object-fit: cover;
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