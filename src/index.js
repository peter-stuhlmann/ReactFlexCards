import React from 'react';

export default function FlexCards(props) {
  const { label, cards } = props;

  return (
    <div>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>
            <a href={card.href}>
              <div>
                <span>{label || 'Read more'}</span>
                <img src={card.img.src} alt={card.img.alt || card.title} />
              </div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
