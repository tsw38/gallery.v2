export default async (req,res,next) => {
  res.sendFile('sitemap.xml', {root:'.'})
}
