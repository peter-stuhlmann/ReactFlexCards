import React from 'react';
import styled from 'styled-components';

export default function FlexCards(props) {
  const {
    cardColor,
    cardsPerRow,
    className,
    containerColor,
    label,
    cards,
    noLabel,
    noTextbox,
    mobileBreakpoint,
    padding,
    tabletBreakpoint,
    width,
  } = props;

  return (
    <StyledFlexCards
      cardColor={cardColor}
      cardsPerRow={cardsPerRow}
      className={className}
      containerColor={containerColor}
      mobileBreakpoint={mobileBreakpoint}
      noLabel={noLabel}
      noTextbox={noTextbox}
      padding={padding}
      tabletBreakpoint={tabletBreakpoint}
      width={width}
    >
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
    </StyledFlexCards>
  );
}

const StyledFlexCards = styled.div`
  background-color: ${(props) => props.containerColor || '#fff'};
  box-sizing: border-box;

  ul {
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    padding: ${(props) => props.padding || '8px'};
    width: ${(props) => props.width || '100%'};
    margin: 0 auto;

    @media (max-width: ${(props) => props.tabletBreakpoint || '768px'}) {
      padding: ${(props) => props.padding || '8px'}
        calc(${(props) => props.padding || '8px'} * 2);
    }

    li {
      background-color: ${(props) => props.cardColor || '#f2f2f2'};
      border-radius: 4px;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      flex: 0 0
        calc(
          calc(100% / ${(props) => props.cardsPerRow || '4'}) -
            calc(${(props) => props.padding || '8px'} * 2)
        );
      list-style-type: none;
      margin: ${(props) => props.padding || '8px'};
      text-align: center;

      @media (max-width: ${(props) => props.tabletBreakpoint || '768px'}) {
        flex: 0 0 calc(50% - ${(props) => props.padding || '8px'});

        &:nth-child(odd) {
          margin: ${(props) => props.padding || '8px'}
            ${(props) => props.padding || '8px'}
            ${(props) => props.padding || '8px'} 0;
        }

        &:nth-child(even) {
          margin: ${(props) => props.padding || '8px'} 0px
            ${(props) => props.padding || '8px'}
            ${(props) => props.padding || '8px'};
        }
      }

      @media (max-width: ${(props) => props.mobileBreakpoint || '480px'}) {
        flex: 0 0 calc(100%);

        &:nth-child(odd) {
          margin: ${(props) => props.padding || '8px'} 0;
        }

        &:nth-child(even) {
          margin: ${(props) => props.padding || '8px'} 0;
        }
      }

      a {
        color: #000;
        text-decoration: none;
      }

      div:first-child {
        border-radius: 4px 4px 0 0;
        overflow: hidden;
        position: relative;

        span {
          display: ${(props) => (props.noLabel ? 'none' : 'inline-block')};
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 4px;
          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
          cursor: pointer;
          line-height: 1;
          position: absolute;
          padding: 5px 16px;
          z-index: 1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          visibility: hidden;
          opacity: 0;
          transition: visibility 0.2s, opacity 0.2s;
        }

        img {
          border-radius: ${(props) =>
            props.noTextbox ? '4px' : '4px 4px 0 0'};
          margin-bottom: ${(props) => (props.noTextbox ? '0' : '-4px')};
          object-fit: cover;
          transition: 0.2s;
          height: 100%;
          width: 100%;
        }
      }

      div:nth-child(2) {
        display: ${(props) => (props.noTextbox ? 'none' : 'block')};
        padding: calc(${(props) => props.padding || '8px'} * 2);

        h3 {
          font-size: 1.2em;
        }
      }

      &:hover div {
        img {
          transform: scale(1.1);
        }

        span {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
`;