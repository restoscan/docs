import Link from 'next/link'

const NewTabLink = ({ text, href }) => {
  return (
    <Link href={href} target="_blank">
      <span className="hover:semibold text-blue-600 hover:underline">
        {text}
      </span>
    </Link>
  )
}

export default NewTabLink
