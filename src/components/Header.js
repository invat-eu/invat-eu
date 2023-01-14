import React from 'react';

import config from '../../config';
export default function Footer() {
  return (
    <header id="header">
      <h1>{config.authorName}</h1>
      <p>
        <a target="_blank" rel="noreferrer noopener" href="https://www.blog.invat.eu/manifest/">Resurse</a>
        {' pentru sistemul educational din Romania - acceseaza '}
        <a target="_blank" rel="noreferrer noopener" href="https://www.blog.invat.eu">Blog</a>.
        <br />
        Ultimul Articol: <a target="_blank" rel="noreferrer noopener" href="https://www.blog.invat.eu/cine-este-mihai-eminescu/">Cine Este Mihai Eminescu</a>
        {' in sectiunea '} 
        <a target="_blank" rel="noreferrer noopener" href="https://www.blog.invat.eu/tag/literatura/">literatura</a>.
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
