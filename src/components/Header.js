import React from 'react';

import config from '../../config';
export default function Footer() {
  return (
    <header id="header">
      <h1>{config.authorName}</h1>
      <p>
        {config.authorHeading} - acceseaza <a target="_blank" rel="noreferrer noopener" href="https://www.blog.invat.eu">Blog</a>.
      </p>
      <nav>
        <ul>
          {config.authorSocialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li>
                <a target="_blank" rel="noreferrer noopener" href={url} class={`icon ${icon}`}>
                  <span class="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
