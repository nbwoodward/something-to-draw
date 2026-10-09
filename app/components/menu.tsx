import { useState } from "react";
import Link from "next/link";
import { allTopics } from "../lib/data";

import { FiMenu, FiShare2 } from "react-icons/fi";

interface MenuProps {
  topic?: string;
  photoId?: string;
}

const Menu = ({ topic, photoId }: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const [copied, setCopied] = useState(false)

  const share = async () => {
    const path = !photoId ? "" : topic ? `/${topic}/${photoId}` : `/photo/${photoId}`;
    const link = path ? `${window.location.origin}${path}` : window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url: link });
        return;
      } catch (e) {
        if ((e as Error)?.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      window.prompt("Copy this link", link);
    }
  };

  return (
    <div id="menu">
      <div id="menu-inner">
        <Link href="/"> somethingtodraw</Link>
        <div id="menu-right">
          <a id="share-button" title="Share this photo" aria-label="Share this photo" onClick={share}>
            {copied ? <span id="share-copied">Link copied</span> : <FiShare2 />}
          </a>
          <div id="desktop-menu-links">
            {allTopics.map((t) => (
              <Link key={t.slug} className={topic === t.slug ? 'active': ''} href={`/${t.slug}`}>{t.name}</Link>
            ))}
          </div>
          <a id="hamberg-menu" onClick={() => setShowMenu(!showMenu)}>
            <FiMenu />
          </a>
        </div>
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
