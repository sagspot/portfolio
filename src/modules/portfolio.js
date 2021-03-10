const portfolioCards = document.querySelector('.main-cards');
const modalCards = document.querySelector('.modal-cards');
const btnContainer = document.querySelector('.modal-btns');

function portfolio() {
  const url = '/src/portfolio.json';
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const cards = JSON.parse(xhr.responseText);
      cardList(cards);
      filterBtns(cards);
    } else
      console.log({
        state: xhr.readyState,
        status: xhr.status,
        text: xhr.statusText,
      });
  };
  xhr.send();
}

function cardList(cardItems) {
  let displayCards = cardItems.map((item) => {
    return `<article class="portfolio-card">
            <div class="card-preview flex ai-c">
              <div class="preview" style="background-image: url(${item.img})"></div>
            </div>
            <div class="card-content">
              <h3>${item.title}</h3>
              <p>${item.desc} </p>
              <div class="card-btns flex ai-c">
                <a href="${item.source}" target="_blank" class="card-btn flex ai-c sourceLink">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.02399 16.5066C7.02399 16.5913 6.92661 16.6592 6.80383 16.6592C6.66411 16.6719 6.56673 16.6041 6.56673 16.5066C6.56673 16.4218 6.66411 16.354 6.7869 16.354C6.91391 16.3412 7.02399 16.4091 7.02399 16.5066ZM5.70726 16.3158C5.67762 16.4006 5.7623 16.4981 5.88931 16.5235C5.9994 16.5659 6.12641 16.5235 6.15181 16.4387C6.17722 16.354 6.09677 16.2565 5.96976 16.2183C5.85968 16.1886 5.7369 16.231 5.70726 16.3158ZM7.57863 16.2438C7.45585 16.2734 7.37117 16.354 7.38387 16.4515C7.39657 16.5362 7.50665 16.5913 7.63367 16.5617C7.75645 16.532 7.84113 16.4515 7.82843 16.3667C7.81573 16.2861 7.70141 16.231 7.57863 16.2438ZM10.3645 0C4.49214 0 0 4.46364 0 10.3431C0 15.0441 2.95524 19.0669 7.17641 20.4827C7.71835 20.5802 7.90887 20.2453 7.90887 19.9698C7.90887 19.707 7.89617 18.2573 7.89617 17.3671C7.89617 17.3671 4.93246 18.0029 4.31008 16.1039C4.31008 16.1039 3.82742 14.8703 3.13306 14.5524C3.13306 14.5524 2.16351 13.8869 3.20081 13.8996C3.20081 13.8996 4.25504 13.9844 4.83508 14.9933C5.7623 16.6295 7.31613 16.159 7.92157 15.8792C8.01895 15.201 8.29415 14.7304 8.59899 14.4507C6.23226 14.1878 3.84436 13.8445 3.84436 9.7666C3.84436 8.60088 4.16613 8.0159 4.84355 7.26984C4.73347 6.99431 4.37359 5.85826 4.95363 4.39158C5.83851 4.11604 7.875 5.5361 7.875 5.5361C8.72177 5.29872 9.63206 5.17579 10.5339 5.17579C11.4357 5.17579 12.346 5.29872 13.1927 5.5361C13.1927 5.5361 15.2292 4.11181 16.1141 4.39158C16.6942 5.8625 16.3343 6.99431 16.2242 7.26984C16.9016 8.02014 17.3165 8.60512 17.3165 9.7666C17.3165 13.8572 14.8228 14.1836 12.456 14.4507C12.8456 14.7855 13.1758 15.4214 13.1758 16.4175C13.1758 17.8461 13.1631 19.6137 13.1631 19.9613C13.1631 20.2369 13.3579 20.5717 13.8956 20.4742C18.1294 19.0669 21 15.0441 21 10.3431C21 4.46364 16.2369 0 10.3645 0ZM4.11532 14.6202C4.06028 14.6626 4.07298 14.7601 4.14496 14.8407C4.2127 14.9085 4.31008 14.9381 4.36512 14.883C4.42016 14.8407 4.40746 14.7432 4.33548 14.6626C4.26774 14.5948 4.17036 14.5651 4.11532 14.6202ZM3.65806 14.2769C3.62843 14.332 3.67077 14.3998 3.75544 14.4422C3.82319 14.4846 3.90786 14.4719 3.9375 14.4125C3.96714 14.3574 3.9248 14.2896 3.84012 14.2472C3.75544 14.2218 3.6877 14.2345 3.65806 14.2769ZM5.02984 15.7859C4.9621 15.841 4.9875 15.9682 5.08488 16.0488C5.18226 16.1463 5.30504 16.159 5.36008 16.0912C5.41512 16.036 5.38972 15.9089 5.30504 15.8283C5.2119 15.7308 5.08488 15.7181 5.02984 15.7859ZM4.54718 15.1628C4.47944 15.2052 4.47944 15.3154 4.54718 15.4129C4.61492 15.5104 4.72923 15.5528 4.78427 15.5104C4.85202 15.4553 4.85202 15.3451 4.78427 15.2476C4.725 15.1501 4.61492 15.1077 4.54718 15.1628Z"
                      fill="white"
                    />
                  </svg>
                  Code
                </a>
                <a href="${item.url}" target="_blank" class="card-btn flex ai-c previewLink">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.9393 0.43934C11.2206 0.158035 11.6022 0 12 0H19.5C19.8978 0 20.2793 0.158035 20.5607 0.43934C20.842 0.720644 21 1.10217 21 1.5V9C21 9.39782 20.842 9.77935 20.5607 10.0607C20.2793 10.342 19.8978 10.5 19.5 10.5C19.1022 10.5 18.7206 10.342 18.4393 10.0607C18.158 9.77935 18 9.39782 18 9V5.121L8.5605 14.5605C8.42213 14.7038 8.25661 14.818 8.0736 14.8966C7.8906 14.9753 7.69377 15.0166 7.4946 15.0184C7.29543 15.0201 7.09791 14.9821 6.91357 14.9067C6.72922 14.8313 6.56175 14.7199 6.42091 14.5791C6.28007 14.4382 6.16869 14.2708 6.09327 14.0864C6.01785 13.9021 5.97989 13.7046 5.98162 13.5054C5.98335 13.3062 6.02473 13.1094 6.10335 12.9264C6.18196 12.7434 6.29623 12.5779 6.4395 12.4395L15.879 3H12C11.6022 3 11.2206 2.84196 10.9393 2.56066C10.658 2.27935 10.5 1.89782 10.5 1.5C10.5 1.10217 10.658 0.720644 10.9393 0.43934ZM0.878679 3.87868C1.44129 3.31607 2.20435 3 3 3H7.5C7.89782 3 8.27935 3.15804 8.56066 3.43934C8.84196 3.72064 9 4.10217 9 4.5C9 4.89782 8.84196 5.27935 8.56066 5.56066C8.27935 5.84196 7.89782 6 7.5 6H3V18H15V13.5C15 13.1022 15.158 12.7206 15.4393 12.4393C15.7206 12.158 16.1022 12 16.5 12C16.8978 12 17.2793 12.158 17.5606 12.4393C17.842 12.7206 18 13.1022 18 13.5V18C18 18.7956 17.6839 19.5587 17.1213 20.1213C16.5587 20.6839 15.7956 21 15 21H3C2.20435 21 1.44129 20.6839 0.878679 20.1213C0.31607 19.5587 0 18.7956 0 18V6C0 5.20435 0.31607 4.44129 0.878679 3.87868Z"
                      fill="white"
                    />
                  </svg>
                  Preview
                </a>
              </div>
            </div>
          </article>`;
  });
  displayCards = displayCards.join('');

  portfolioCards.innerHTML = displayCards;

  // limit homepage display to 3 random items
  const displayItems = [...document.querySelectorAll('.portfolio-card')];
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    const arr = Math.floor(Math.random() * displayItems.length);
    if (randomNumbers.indexOf(arr) === -1) randomNumbers.push(arr);
  }
  let displayItem = '';
  function randomNumber() {
    randomNumbers.forEach((item) => {
      displayItem += displayItems[item].outerHTML;
    });
  }
  randomNumber();
  portfolioCards.innerHTML = displayItem;
  modalCards.innerHTML = displayCards;

  // Hide a tags without source code
  const sourceLink = document.querySelectorAll('.sourceLink');
  sourceLink.forEach(function (source) {
    const noSource = source.getAttribute('href') === 'undefined';
    noSource ? (source.style.display = 'none') : source;
  });

  // Graphic button behaviour
  const previewLink = document.querySelectorAll('.previewLink');
  previewLink.forEach(function (preview) {
    const graphic = preview.getAttribute('href') === 'undefined';
    graphic ? (preview.style.display = 'none') : preview;
  });
}

function filterBtns(cards) {
  const categories = cards.reduce(
    (values, item) => {
      if (!values.includes(item.category)) values.push(item.category);
      return values;
    },
    ['all']
  );
  const categoryBtns = categories
    .map((category) => {
      return `<div class="portfolio-btn" data-id=${category}>${category}</div>`;
    })
    .join('');
  btnContainer.innerHTML = categoryBtns;

  // Filtering by categories
  const portfolioBtns = btnContainer.querySelectorAll('.portfolio-btn');
  portfolioBtns.forEach((portfolioBtn) => {
    portfolioBtn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const cardCategory = cards.filter((cardItem) => {
        if (cardItem.category === category) {
          return cardItem;
        }
      });
      if (category === 'all') cardList(cards);
      else cardList(cardCategory);
    });
  });
}

const viewMore = document.querySelector('.card-btn');
const modal = document.querySelector('.modal');
const modelClose = document.querySelector('.modal-close');

const viewBtn = viewMore.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('open');
  document.body.style.overflowY = 'hidden';
});

function closeModal() {
  modelClose.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflowY = 'auto';
  });
}
export { portfolio, viewBtn, closeModal };
