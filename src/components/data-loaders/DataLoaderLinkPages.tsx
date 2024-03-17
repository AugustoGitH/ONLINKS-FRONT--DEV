import { useLinkPagesAndLinksQuery } from "@/queries/useLinkPagesQuery"
import useLinkPagesStore from "@/stores/link-pages/useLinkPagesStore"
import { useEffect } from "react"


const DataLoaderLinkPages = () => {
  const { data } = useLinkPagesAndLinksQuery()
  const setLinkPages = useLinkPagesStore(state => state.setLinkPages)

  useEffect(() => {
    if (data) {
      console.log(data)
      setLinkPages(data)
    }
  }, [data, setLinkPages])

  return <></>
}

export default DataLoaderLinkPages