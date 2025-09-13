import { Link } from "react-router-dom"

type Props = {
  name: string
  link?: string
  domain?: string 
  className?: string
  style?: string
}
export const LinkRouter = ({ name , link , className, domain, style}: Props) => {
  return (
      <div className={style}>
        <Link to={`/${domain}${link ? "/" + link : ""}`} className={`hover:text-gray-400 mr-2.5 ${className}`}>
          {name}
        </Link>
      </div>
  )
}
