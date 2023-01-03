import Link from "next/link";

interface MenuProps {
  topic?: string;
}

const Menu = ({ topic }: MenuProps) => {
  return (
    <div id="menu">
      <Link href="/"> somethingtodraw {topic}</Link>
    </div>
  );
};

export default Menu;
