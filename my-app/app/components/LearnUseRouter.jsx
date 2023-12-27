
"use client"
import { useRouter } from "next/navigation"

const LearnUseRouter = () => {
    const router = useRouter() ;
  return (
    <div>
        learn use routes
      <button type="button" onClick={()=> router.push("/admin/dashboard")} >
        go to admin dashboard 
      </button>
    </div>
  )
}

export default LearnUseRouter
