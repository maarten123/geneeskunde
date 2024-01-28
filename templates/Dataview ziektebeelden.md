<%*
const dv = this.app.plugins.plugins["dataview"].api;
const te = await dv.queryMarkdown(`LIST FROM "content/Ziektebeelden"`);
tR += te.value;
%>
