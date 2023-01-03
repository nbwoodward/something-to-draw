import { useState } from "react";
import Link from "next/link";
import { allTopics } from "../lib/data";

import { FiMenu } from "react-icons/fi";

interface MenuProps {
  topic?: string;
}

const Menu = ({ topic }: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div id="menu">
      <div id="menu-inner">
        <Link href="/"> somethingtodraw</Link>
        <div id="desktop-menu-links">
          {allTopics.map((topic) => (
            <Link key={topic.slug} href={`/${topic.slug}`}>{topic.name}</Link>
          ))}
        </div>
        <a id="hamberg-menu" onClick={() => setShowMenu(!showMenu)}>
          <FiMenu />
        </a>
      </div>

      {showMenu &&
      <div id="mobile-menu-links">
        <Link onClick={() => setShowMenu(false)} href="/">Everything</Link>
        {allTopics.map((topic) => (
          <Link onClick={() => setShowMenu(false)} key={topic.slug} href={`/${topic.slug}`}>{topic.name}</Link>
        ))}
      </div>
      }
    </div>
  );
};

export default Menu;
