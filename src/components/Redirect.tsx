import { useRouter } from "next/router"
import { useEffect } from "react"


export default function Redirect({ href }: { href: string }) {
  const router = useRouter()

  useEffect(() => {
    if (href) {
      router.push(href)
    }
  }, [href])

  return <></>
}