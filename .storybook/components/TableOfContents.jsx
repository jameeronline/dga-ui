// .storybook/components/TableOfContents.jsx
import React, { useEffect, useState } from 'react';

export const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Storybook Autodocs headers typically have specific IDs or classes
    const query = '.sbdocs-h2, .sbdocs-h3'; 
    const elements = Array.from(document.querySelectorAll(query));
    
    const headingData = elements.map((el) => ({
      id: el.id,
      text: el.innerText,
      level: el.tagName // To distinguish between H2 and H3 for nesting
    }));

    setHeadings(headingData);
  }, []);

  return (
    <aside className="toc-sidebar">
      <nav>
        <h4>On this page</h4>
        <ul>
          {headings.map((heading) => (
            <li key={heading.id} style={{ marginLeft: heading.level === 'H3' ? '15px' : '0' }}>
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};