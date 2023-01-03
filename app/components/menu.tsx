
interface MenuProps {
  topic?: string
}

export default ({topic}: MenuProps) => {
  return (
    <div id="menu">
      <a href="/"> somethingtodraw {topic}</a>
    </div>
  )
}
