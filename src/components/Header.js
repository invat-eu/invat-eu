import React from 'react';

import config from '../../config';
export default function Footer() {
  return (
    <header id="header">
      <h1>{config.authorName}</h1>
      <p>

        Resurse <a target="_blank" rel="noreferrer noopener" href="https://www.elearning.invat.eu/intro/">eLearning</a>
        {', '} 
        <a target="_blank" rel="noreferrer noopener" href="https://www.blog.invat.eu">Blog</a> 
        {' si '} 
        <a target="_blank" rel="noreferrer noopener" href="https://discord.gg/uh2WWTKt">Comunitate (Discord)</a> 
        {' pentru elevii din Romania.'}
        <br />
        <strong>
        <a href="mail:contact@invat.eu">contact@invat.eu</a>
        </strong>
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
