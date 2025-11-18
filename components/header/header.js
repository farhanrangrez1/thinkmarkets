(() => {
  const mountPoint = document.getElementById("header-root");
  if (!mountPoint) {
    return;
  }

  const fallbackMarkup = `<header data-ktc-search-exclude class="g-header">

      <div id="react_0HNH36D1LS8B0"><div class="g-header" data-reactroot><div
            class="g-header__overlay"></div><div
            class="g-container g-container--fullwidth g-container--new"><div
              class="g-container  g-container--new"><div
                class="g-header__navigation"><div
                  class="g-mobile-header__navigation g-mobile-header__wrapper"><div
                    class="logo-wrapper"><a
                      href=""><img
                        loading="eager"
                        src=""
                        alt="PrimeWave" class="logo-light " /><img
                        loading="eager"
                        src="../../theprimewaves_logo.jpg"
                        alt="PrimeWave"
                        class="logo-dark " /></a></div><div><div
                      class="navigation__widgets  "><div
                        class="navigation__widgets__inputWrapper"><input
                          type="search" class="navigation__search "
                          placeholder="Search site" value /><a
                          class="clear-search"><svg width="24" height="24"
                            viewBox="0 0 24 24" fill="none"
                            xmlns="../../www.w3.org/2000/svg.html"><path
                              d="M12 10.586l-4.95-4.95-1.414 1.414 4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95-1.414-1.414-4.95 4.95z"
                              fill="currentColor"></path></svg></a></div></div><div
                      class="navigation__widget navigation__widget--lang languageText"><svg
                        width="16" height="16" viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="../../www.w3.org/2000/svg.html"><g><path
                            d="M15.5583 5.37914L15.5288 5.30061C14.9693 3.74969 13.9485 2.42454 12.5939 1.47239C11.2393 0.510429 9.64908 0 8 0C6.3411 0 4.75092 0.500614 3.39632 1.45276C2.04172 2.40491 1.03067 3.73006 0.46135 5.2908L0.441718 5.35951C-0.147239 7.05767 -0.147239 8.9227 0.441718 10.611L0.471166 10.6896C1.03067 12.2503 2.04172 13.5755 3.39632 14.5276C4.75092 15.4798 6.3411 15.9804 8 15.9804C9.6589 15.9804 11.2491 15.4699 12.6037 14.5276C13.9583 13.5755 14.9693 12.2503 15.5288 10.6896L15.5485 10.611C16.1374 8.91288 16.1374 7.04785 15.5485 5.35951L15.5583 5.37914ZM11.6515 6.3411H14.292C14.5767 7.43068 14.5767 8.57914 14.292 9.66871H11.6515C11.8184 8.55951 11.8184 7.44049 11.6515 6.3411ZM9.76687 1.74724C10.5521 1.97301 11.308 2.34601 11.9558 2.84663C12.6528 3.3865 13.2417 4.0638 13.6736 4.82945H11.308C10.9742 3.71043 10.454 2.66994 9.75706 1.74724H9.76687ZM9.76687 14.2528C10.4638 13.3202 10.984 12.2798 11.3178 11.1607H13.6834C13.2515 11.9264 12.6626 12.6135 11.9656 13.1436C11.3178 13.6442 10.562 14.0172 9.77669 14.2429L9.76687 14.2528ZM6.23313 1.74724C5.5362 2.67975 5.01595 3.71043 4.68221 4.82945H2.31656C2.74847 4.0638 3.33742 3.37669 4.03436 2.84663C4.68221 2.34601 5.43804 1.97301 6.22331 1.74724H6.23313ZM10.2675 8C10.2675 8.55951 10.2184 9.11902 10.1202 9.66871H5.87975C5.68344 8.55951 5.68344 7.44049 5.87975 6.3411H10.1202C10.2184 6.8908 10.2675 7.45031 10.2675 8.00982V8ZM6.28221 4.82945C6.65522 3.77914 7.24417 2.79755 8 1.99264C8.76564 2.80736 9.3546 3.77914 9.71779 4.82945H6.27239H6.28221ZM4.69203 11.1607C5.02577 12.2798 5.54601 13.3202 6.24295 14.2528C5.45767 14.027 4.70184 13.654 4.05399 13.1534C3.35706 12.6135 2.7681 11.9362 2.3362 11.1706H4.70184L4.69203 11.1607ZM9.72761 11.1607C9.3546 12.211 8.76565 13.1926 8.00982 13.9975C7.24417 13.1828 6.65522 12.211 6.29202 11.1607H9.73742H9.72761ZM4.35828 9.6589H1.71779C1.58037 9.11902 1.50184 8.55951 1.50184 7.99018C1.50184 7.43068 1.57055 6.87117 1.71779 6.32147H4.35828C4.19141 7.43068 4.19141 8.54969 4.35828 9.64908V9.6589Z"
                            fill="inherit"></path></g></svg>EN</div><div
                      class="navDropdown navDropdown__cols-undefined navDropdown__widget  "><div
                        class="navDropdown__content"></div></div></div><a
                    href="#" class="navigation__mobile-trigger"><svg width="24"
                      height="24" viewBox="0 0 24 24" fill="currentColor"
                      xmlns="../../www.w3.org/2000/svg.html"><path
                        d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
                        fill="inherit"></path></svg></a></div><div
                  class="g-tablet-header__navigation"><div
                    class="logo-wrapper"><a
                      href="https://www.thinkmarkets.com/en"><img
                        loading="eager"
                        src="https://theprimewaves.com/wp-content/uploads/2025/09/Group-2-1-scaled-140x65.png "
                        alt="PrimeWave" class="logo-light " /><img
                        loading="eager"
                        src=" https://theprimewaves.com/wp-content/uploads/2025/09/Group-2-1-scaled-140x65.png"
                        alt="PrimeWave" class="logo-dark " /></a></div><div
                    class="optionsWrapper"><a class="search-trigger"><svg
                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                        xmlns="../../www.w3.org/2000/svg.html"><path
                          d="M11.3335 11.3335L14.0002 14.0002"
                          stroke="currentColor" stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path><path
                          d="M2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667C8.80867 12.6667 10.1441 12.0677 11.1096 11.0995C12.0718 10.1348 12.6667 8.80353 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333Z"
                          stroke="currentColor" stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path></svg></a><div
                      class="navDropdown navDropdown__cols-undefined navDropdown__widget  "><div
                        class="navDropdown__content"></div></div><div><div
                        class="navigation__widgets  "><div
                          class="navigation__widgets__inputWrapper"><input
                            type="search" class="navigation__search "
                            placeholder="Search site" value /><a
                            class="clear-search"><svg width="24" height="24"
                              viewBox="0 0 24 24" fill="none"
                              xmlns="../../www.w3.org/2000/svg.html"><path
                                d="M12 10.586l-4.95-4.95-1.414 1.414 4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95-1.414-1.414-4.95 4.95z"
                                fill="currentColor"></path></svg></a></div></div><div
                        class="navigation__widget navigation__widget--lang languageText"><svg
                          width="16" height="16" viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="../../www.w3.org/2000/svg.html"><g><path
                              d="M15.5583 5.37914L15.5288 5.30061C14.9693 3.74969 13.9485 2.42454 12.5939 1.47239C11.2393 0.510429 9.64908 0 8 0C6.3411 0 4.75092 0.500614 3.39632 1.45276C2.04172 2.40491 1.03067 3.73006 0.46135 5.2908L0.441718 5.35951C-0.147239 7.05767 -0.147239 8.9227 0.441718 10.611L0.471166 10.6896C1.03067 12.2503 2.04172 13.5755 3.39632 14.5276C4.75092 15.4798 6.3411 15.9804 8 15.9804C9.6589 15.9804 11.2491 15.4699 12.6037 14.5276C13.9583 13.5755 14.9693 12.2503 15.5288 10.6896L15.5485 10.611C16.1374 8.91288 16.1374 7.04785 15.5485 5.35951L15.5583 5.37914ZM11.6515 6.3411H14.292C14.5767 7.43068 14.5767 8.57914 14.292 9.66871H11.6515C11.8184 8.55951 11.8184 7.44049 11.6515 6.3411ZM9.76687 1.74724C10.5521 1.97301 11.308 2.34601 11.9558 2.84663C12.6528 3.3865 13.2417 4.0638 13.6736 4.82945H11.308C10.9742 3.71043 10.454 2.66994 9.75706 1.74724H9.76687ZM9.76687 14.2528C10.4638 13.3202 10.984 12.2798 11.3178 11.1607H13.6834C13.2515 11.9264 12.6626 12.6135 11.9656 13.1436C11.3178 13.6442 10.562 14.0172 9.77669 14.2429L9.76687 14.2528ZM6.23313 1.74724C5.5362 2.67975 5.01595 3.71043 4.68221 4.82945H2.31656C2.74847 4.0638 3.33742 3.37669 4.03436 2.84663C4.68221 2.34601 5.43804 1.97301 6.22331 1.74724H6.23313ZM10.2675 8C10.2675 8.55951 10.2184 9.11902 10.1202 9.66871H5.87975C5.68344 8.55951 5.68344 7.44049 5.87975 6.3411H10.1202C10.2184 6.8908 10.2675 7.45031 10.2675 8.00982V8ZM6.28221 4.82945C6.65522 3.77914 7.24417 2.79755 8 1.99264C8.76564 2.80736 9.3546 3.77914 9.71779 4.82945H6.27239H6.28221ZM4.69203 11.1607C5.02577 12.2798 5.54601 13.3202 6.24295 14.2528C5.45767 14.027 4.70184 13.654 4.05399 13.1534C3.35706 12.6135 2.7681 11.9362 2.3362 11.1706H4.70184L4.69203 11.1607ZM9.72761 11.1607C9.3546 12.211 8.76565 13.1926 8.00982 13.9975C7.24417 13.1828 6.65522 12.211 6.29202 11.1607H9.73742H9.72761ZM4.35828 9.6589H1.71779C1.58037 9.11902 1.50184 8.55951 1.50184 7.99018C1.50184 7.43068 1.57055 6.87117 1.71779 6.32147H4.35828C4.19141 7.43068 4.19141 8.54969 4.35828 9.64908V9.6589Z"
                              fill="inherit"></path></g></svg>EN</div><div
                        class="navDropdown navDropdown__cols-undefined navDropdown__widget  "><div
                          class="navDropdown__content"></div></div></div><a
                      href="#" class="navigation__mobile-trigger"><svg
                        width="24" height="24" viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="../../www.w3.org/2000/svg.html"><path
                          d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
                          fill="inherit"></path></svg></a></div></div><div
                  class="g-header__navigation-container"><div
                    class="navigation__container"><div class="logo-wrapper"><a
                        href="https://www.thinkmarkets.com/en"><img
                          loading="eager"
                          src="https://theprimewaves.com/wp-content/uploads/2025/09/Group-2-1-scaled-140x65.png"
                          alt="PrimeWave" class="logo-light " /><img
                          loading="eager"
                          src="https://theprimewaves.com/wp-content/uploads/2025/09/Group-2-1-scaled-140x65.png"
                          alt="PrimeWave" class="logo-dark " /></a></div><div
                      class="navigation__list"><div
                        class="navigation__menuWrapper"><div
                          class="navigation__widgets__inputWrapper navigation__widgets__inputWrapper--mobile"><input
                            type="search" class="navigation__search active"
                            placeholder="Search site" value /><a
                            class="clear-search"><svg width="24" height="24"
                              viewBox="0 0 24 24" fill="none"
                              xmlns="../../www.w3.org/2000/svg.html"><path
                                d="M12 10.586l-4.95-4.95-1.414 1.414 4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95-1.414-1.414-4.95 4.95z"
                                fill="currentColor"></path></svg></a></div><div
                          class="navigation__menuTitleWrapper"><p
                            class="navigation__menuTitleWrapper__menuTitle">Menu</p><a><svg
                              width="24" height="24" viewBox="0 0 24 24"
                              fill="none"
                              xmlns="../../www.w3.org/2000/svg.html"><path
                                d="M12 10.586l-4.95-4.95-1.414 1.414 4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95-1.414-1.414-4.95 4.95z"
                                fill="currentColor"></path></svg></a></div><div
                          class="navigation__item "><span
                            class="navigation__link">Markets<svg width="24"
                              height="24" viewBox="0 0 24 24" fill="none"
                              xmlns="../../www.w3.org/2000/svg.html"><path
                                d="M17.29 11.29a.996.996 0 0 0-1.41 0L12 15.17l-3.88-3.88a.997.997 0 1 0-1.41 1.41l4.59 4.59a.994.994 0 0 0 1.41 0l4.59-4.59c.38-.38.38-1.02-.01-1.41z"
                                fill="#0E1D31"></path></svg></span></div><div
                          class="navigation__item "><span
                            class="navigation__link">Platforms<svg width="24"
                              height="24" viewBox="0 0 24 24" fill="none"
                              xmlns="../../www.w3.org/2000/svg.html"><path
                                d="M17.29 11.29a.996.996 0 0 0-1.41 0L12 15.17l-3.88-3.88a.997.997 0 1 0-1.41 1.41l4.59 4.59a.994.994 0 0 0 1.41 0l4.59-4.59c.38-.38.38-1.02-.01-1.41z"
                                fill="#0E1D31"></path></svg></span></div><div
                          class="navigation__item "><span
                            class="navigation__link">Account<svg width="24"
                              height="24" viewBox="0 0 24 24" fill="none"
                              xmlns="../../www.w3.org/2000/svg.html"><path
                                d="M17.29 11.29a.996.996 0 0 0-1.41 0L12 15.17l-3.88-3.88a.997.997 0 1 0-1.41 1.41l4.59 4.59a.994.994 0 0 0 1.41 0l4.59-4.59c.38-.38.38-1.02-.01-1.41z"
                                fill="#0E1D31"></path></svg></span></div><div
                          class="navigation__item "><span
                            class="navigation__link">Company<svg width="24"
                              height="24" viewBox="0 0 24 24" fill="none"
                              xmlns="../../www.w3.org/2000/svg.html"><path
                                d="M17.29 11.29a.996.996 0 0 0-1.41 0L12 15.17l-3.88-3.88a.997.997 0 1 0-1.41 1.41l4.59 4.59a.994.994 0 0 0 1.41 0l4.59-4.59c.38-.38.38-1.02-.01-1.41z"
                                fill="#0E1D31"></path></svg></span></div><div
                          class="navigation__item "><span
                            class="navigation__link">Support<svg width="24"
                              height="24" viewBox="0 0 24 24" fill="none"
                              xmlns="../../www.w3.org/2000/svg.html"><path
                                d="M17.29 11.29a.996.996 0 0 0-1.41 0L12 15.17l-3.88-3.88a.997.997 0 1 0-1.41 1.41l4.59 4.59a.994.994 0 0 0 1.41 0l4.59-4.59c.38-.38.38-1.02-.01-1.41z"
                                fill="#0E1D31"></path></svg></span></div></div></div><div
                      class="loginAndSearchWrapper"><div
                        class="loginButtonsWrapper"><div
                          class="navigation__magnifying"><div
                            class="navigation__item navigation__item--button "><div
                              class="button-v2-wrapper flex "><span
                                role="button"
                                class="button-v2 flex ghost-medium-wbg login-button"
                                style="cursor:pointer">Login</span></div></div></div><div
                          class="navigation__magnifying"><div
                            class="navigation__item navigation__item--button "><div
                              class="button-v2-wrapper flex "><a
                                href="../../portal.thinkmarkets.com/account/individual/index.html"
                                class="button-v2 flex cta-medium-wbg "
                                target="_self">Register</a></div></div></div></div></div><div
                      class="navDropdown navDropdown__cols-undefined navDropdown__undefined  "><div
                        class="navDropdown__content"></div></div></div></div></div></div></div></div></div>
    </header>`;

  const hydrateHeaderReact = () => {
    try {
      if (
        typeof window === "undefined" ||
        !window.React ||
        !window.ReactDOM ||
        !window.headerbundle ||
        !window.headerbundle.NavigationHeader
      ) {
        return;
      }

      const navRoot = document.getElementById("react_0HNH36D1LS8B0");
      if (!navRoot) {
        return;
      }

      ReactDOM.hydrate(
        React.createElement(headerbundle.NavigationHeader, {
          navigationItems: [
            {
              title: "Markets",
              isCurrentPage: null,
              type: "text",
              link: "",
              sections: [
                {
                  title: "CFD TRADING",
                  type: "wide",
                  sectionItems: [
                    {
                      title: "Forex",
                      description:
                        "Access major, minor and exotic currency pairs.",
                      linkUrl: "/en/forex-trading/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/33c499aa-88f7-4ffe-8eb3-33821b942006/Group-6294.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "Indices",
                      description:
                        "Discover a wide selection of global indices.",
                      linkUrl: "/en/indices-trading/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/b61c3a40-7449-4b11-823c-b8fe40fb27ae/Bar-Graph.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "Commodities",
                      description:
                        "Trade CFDs on gold, other metals and energy.",
                      linkUrl: "/en/commodities-trading/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/5001b500-992b-408b-b15e-c1f4a40eab1f/Commodities-gas-oil-wheat.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "Cryptocurrencies",
                      description:
                        "Open trades on bitcoin and popular altcoins.",
                      linkUrl: "/en/cryptocurrency-trading/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/9e911f63-f211-48db-a94a-8eb8f25fa300/Crypto-BTC.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "Stocks",
                      description:
                        "Trade the price movements of stocks without buying them.",
                      linkUrl: "/en/stocks-trading/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/35fbd5db-40f2-4951-aa4a-f47163c31760/stocks_icon.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "ETFs",
                      description: "Speculate on the price movements of ETFs.",
                      linkUrl: "/en/etf-trading/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/cc0877ff-1685-47b5-8914-2ae819db76d8/ETFs.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "Futures",
                      description:
                        "Trade futures price movements on a wide range of instruments.",
                      linkUrl: "/en/futures-trading/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/d22511a1-efbb-4b2f-872d-eed1e980f6ea/Futures.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                  ],
                },
                {
                  title: "CONTRACT SPECIFICATIONS",
                  type: "wide",
                  sectionItems: [
                    {
                      title: "Classic leverage",
                      description:
                        "View spreads, contract sizes and trading hours",
                      linkUrl: "/en/contract-specifications/",
                      linkMoreText: "Classic Leverage",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/e8fffbbe-9966-4035-8371-7005af5c9c9c/contractspecs.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                  ],
                },
              ],
              article: {
                title: "Latest news",
                imageUrl:
                  "/getmedia/c6728d98-f0d7-49a7-a050-973a63b6d230/latest-news.png?width=320\u0026height=168\u0026ext=.png",
                description:
                  "\u003cp\u003eUS Dollar to keep strengthening into the New Year, dominating over other global currencies amidst crippling inflation.\u003c/p\u003e\r\n",
                linkUrl: "/en/market-news/",
                linkText: "Find out more",
              },
            },
            {
              title: "Platforms",
              isCurrentPage: null,
              type: "text",
              link: "",
              sections: [
                {
                  title: "TRADING",
                  type: "default",
                  sectionItems: [
                    {
                      title: "Prime Trader",
                      description:
                        "Our award-winning proprietary CFD trading platform.",
                      linkUrl: "/en/thinktrader/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/012cdb34-6069-4603-b3c3-2be344b0f097/Prime Trader.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "TradingView",
                      description:
                        "The world`s most popular charting platform.",
                      linkUrl: "/en/trading-view-thinktrader/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/46ec23f7-d84f-4bbd-a0c6-492614b2b944/TradingView-logo.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "MT4",
                      description: "The industry standard trading platform.",
                      linkUrl: "/en/metatrader4/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/05e9c832-33b5-4c12-8255-64dd91016740/logo-MT4.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "MT5",
                      description:
                        "The latest and most advanced MetaTrader platform.",
                      linkUrl: "/en/metatrader5/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/05e9c832-33b5-4c12-8255-64dd91016740/logo-MT4.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "Traders’ Gym",
                      description:
                        "Backtest your trading strategies on historical data.",
                      linkUrl: "/en/traders-gym/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/fd10098a-2def-41b0-830e-973292e342e1/traders-gym-web-icon.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                  ],
                },
                {
                  title: "TRADING SERVICES",
                  type: "default",
                  sectionItems: [
                    {
                      title: "Signal Centre",
                      description:
                        "Discover new opportunities with daily trading ideas.",
                      linkUrl: "/en/signal-centre/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/80c93802-f0b4-4065-b388-cb5f41a2d3e9/Trading-signals.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "PrimeCopy",
                      description:
                        "The convenient way to copy the positions of experienced traders.",
                      linkUrl: "/en/thinkcopy/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/e420b561-672c-4bc0-b631-fbe974642250/MegaMenu-Primecopy-small-icon.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                  ],
                },
              ],
              article: null,
            },
            // {
            //   title: "Account",
            //   isCurrentPage: null,
            //   type: "text",
            //   link: "",
            //   sections: [
            //     {
            //       title: "",
            //       type: "default",
            //       sectionItems: [
            //         {
            //           title: "Account",
            //           description:
            //             "Explore PrimePortal - our sophisticated trading hub.",
            //           linkUrl: "/en/trading-academy/",
            //           linkMoreText: "",
            //           linkMoreUrl: "",
            //           imageUrl:
            //             "/getmedia/6d6a1413-b137-45d7-b821-b604aee5daea/graduation.svg?ext=.svg",
            //           code: "",
            //           selected: false,
            //           opensInNewTab: false,
            //         },
            //       ],
            //     },
            //   ],
            //   article: {
            //     title: "Featured article",
            //     imageUrl:
            //       "/getmedia/f4adbac8-0ef3-46d9-adf4-02593efdd357/knowledge-hub-article.png?width=320\u0026height=186\u0026ext=.png",
            //     description:
            //       "\u003cp\u003eHow to trade ETFs with CFDs\u0026nbsp;\u003c/p\u003e\r\n\u003csub\u003eFind out the difference between trading ETFs and investing in them.\u003c/sub\u003e",
            //     linkUrl: "/en/trading-academy/etfs/how-to-trade-etfs/",
            //     linkText: "Learn more",
            //   },
            // },
            {
              title: "Partners",
              isCurrentPage: null,
              type: "text",
              link: "",
              sections: [
                {
                  title: "PARTERS \u0026 PROGRAMMES",
                  type: "default",
                  sectionItems: [
                    {
                      title: "IBs",
                      description:
                        "Become an Introducing Broker and earn generous rebates.",
                      linkUrl: "/en/ibs/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/2c39415e-39cf-4e5c-9ec4-d6a45e692076/Expert-advisors.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "Refer a friend",
                      description:
                        "Get rewarded when you introduce your friends to PrimeMarkets.",
                      linkUrl: "/en/refer-a-friend/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/1b06df28-f429-476d-b3d7-635febd49c81/Mega-menu-Company-Refer-a-friend-icon.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "Institutional solutions",
                      description:
                        "Utilise our advanced technology for your business",
                      linkUrl: "/en/institutional-sales/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/ef561501-76cb-4dbe-992b-c204a040ae5e/Institutional-sales-MegaMenu-icon.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                  ],
                },
              ],
              article: null,
            },
            {
              title: "Support",
              isCurrentPage: null,
              type: "text",
              link: "",
              sections: [
                {
                  title: "",
                  type: "",
                  sectionItems: [
                    {
                      title: "Contact us",
                      description:
                        "Get in touch with our client support team 24/7.",
                      linkUrl: "/en/contact-us/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/22434ffc-bb2e-4192-b898-ce5239e24acd/Phone-call.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "Help center",
                      description:
                        "Find answers to the most frequently asked questions.",
                      linkUrl: "/en/support/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/73c106b8-ac56-4527-825d-97d635974ddc/Chat-bubbles-conversation.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                    {
                      title: "Account management",
                      description:
                        "Explore PrimePortal - our sophisticated trading hub.",
                      linkUrl: "/en/account-management/",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/e2e5d968-1943-4681-a872-57c942e29c33/Account-management.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                  ],
                },
              ],
              article: null,
            },
            {
              title: "Login",
              isCurrentPage: null,
              type: "button-register",
              link: "",
              sections: [
                {
                  title: "TRADING PLATFORMS",
                  type: "wide",
                  sectionItems: [
                      // {
                      //   title: "Prime Trader Web",
                      //   description:
                      //     "Explore the powerful features and tools on our proprietary platform.",
                      //   linkUrl: "https://web.thinktrader.com/account/login",
                      //   linkMoreText: "Login",
                      //   linkMoreUrl: "https://partner.thinkmarkets.com/login",
                      //   imageUrl:
                      //     "/getmedia/012cdb34-6069-4603-b3c3-2be344b0f097/Prime Trader.svg?ext=.svg",
                      //   code: "",
                      //   selected: false,
                      //   opensInNewTab: true,
                      // },
                      // {
                      //   title: "MT4",
                      //   description:
                      //     "Trade global markets on the industry standard MT4 platform.",
                      //   linkUrl: "/en/metatrader4/mt4-web/terminal/",
                      //   linkMoreText: "Login",
                      //   linkMoreUrl: "",
                      //   imageUrl:
                      //     "/getmedia/05e9c832-33b5-4c12-8255-64dd91016740/logo-MT4.svg?ext=.svg",
                      //   code: "",
                      //   selected: false,
                      //   opensInNewTab: true,
                      // },
                      // {
                      //   title: "MT5",
                      //   description:
                      //     "Access one of the most powerful multi-asset trading platforms.",
                      //   linkUrl: "/en/metatrader5/mt5-web/terminal/",
                      //   linkMoreText: "Login",
                      //   linkMoreUrl: "",
                      //   imageUrl:
                      //     "/getmedia/05e9c832-33b5-4c12-8255-64dd91016740/logo-MT4.svg?ext=.svg",
                      //   code: "",
                      //   selected: false,
                      //   opensInNewTab: true,
                      // },
                  ],
                },

                {
                  title: "ACCOUNT MANAGEMENT",
                  type: "wide",
                  sectionItems: [
                    {
                      title: "PrimePortal",
                      description:
                        "Manage all your trading accounts in one mobile app.",
                      linkUrl: "https://portal.thinkmarkets.com/account/login",
                      linkMoreText: "Login",
                      linkMoreUrl:
                        "https://portal.thinkmarkets.com/account/login",
                      imageUrl:
                        "/getmedia/e2e5d968-1943-4681-a872-57c942e29c33/Account-management.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: true,
                    },
                    {
                      title: "Login hub",
                      description:
                        "Get access to all trading platforms on all devices",
                      linkUrl: "/en/login/",
                      linkMoreText: "",
                      linkMoreUrl: "/en/login/",
                      imageUrl:
                        "/getmedia/1cd6419c-2a2d-4ab3-9bd5-442ffcd1c864/login-hub-icon.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                  ],
                },
                {
                  title: "PARTNER PROGRAMMES",
                  type: "default",
                  sectionItems: [
                    {
                      title: "IBs",
                      description:
                        "Become an Introducing Broker and earn generous rebates",
                      linkUrl: "https://portal.thinkmarkets.com/partner",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl:
                        "/getmedia/2c39415e-39cf-4e5c-9ec4-d6a45e692076/Expert-advisors.svg?ext=.svg",
                      code: "",
                      selected: false,
                      opensInNewTab: true,
                    },
                  ],
                },
              ],
              article: null,
            },
            {
              title: "Register",
              isCurrentPage: null,
              type: "button-login",
              link: "",
              sections: [
                // {
                //   title: "",
                //   type: "wide",
                //   sectionItems: [
                //     {
                //       title: "Demo account",
                //       description:
                //         "Explore the markets, test your skills and practice using trading tools in a risk-free environment.",
                //       linkUrl:
                //         "https://portal.thinkmarkets.com/account/individual/demo",
                //       linkMoreText: "Create account",
                //       linkMoreUrl:
                //         "https://portal.thinkmarkets.com/account/individual/demo",
                //       imageUrl:
                //         "/getmedia/8f2a702d-af23-460a-9c83-76bbbff43e9f/Monitor-strategies.svg?ext=.svg",
                //       code: "",
                //       selected: false,
                //       opensInNewTab: true,
                //     },
                //     {
                //       title: "Live account",
                //       description:
                //         "Catch trading opportunities on thousands of instruments and put your trading knowledge to work.",
                //       linkUrl:
                //         "https://portal.thinkmarkets.com/account/individual/",
                //       linkMoreText: "Create account",
                //       linkMoreUrl:
                //         "https://portal.thinkmarkets.com/account/register/live?lang=en",
                //       imageUrl:
                //         "/getmedia/6394e9bd-89f7-4813-9d0e-ddb1c25e4715/New-account-user.svg?ext=.svg",
                //       code: "",
                //       selected: false,
                //       opensInNewTab: true,
                //     },
                //   ],
                // },
              ],
              article: {
                title: "Partnerships",
                imageUrl:
                  "/getmedia/f62440ad-f909-4e95-b069-8d3f5eb5be4d/partnership-article.png?width=320\u0026height=186\u0026ext=.png",
                description:
                  "Sign up to be PrimeMarkets\u0026rsquo; partner, find the programme that works for you and get compensated.",
                linkUrl:
                  "https://partners.thinkmarkets.com/afs/wsignup.form.php",
                linkText: "Learn more",
              },
            },
          ],
          secondaryNavigation: {
            data: [
              {
                title: "Support",
                href: "/en/support/",
                sections: [],
                isCurrentPage: false,
                type: "widget",
                article: null,
              },
              {
                title: "Partners",
                href: "/en/partnerships/introducing-broker/",
                sections: [],
                isCurrentPage: false,
                type: "widget",
                article: null,
              },
            ],
            widgets: {
              language: {
                title: "Select your language/country",
                type: "default",
                currentCulture: "EN",
                currentIcon:
                  "/getmedia/8c9b6082-99b8-4c9a-ae8d-7fb6490ac171/English_1.svg?ext=.svg",
                sections: [
                  {
                    title: "International",
                    type: "default",
                    sectionItems: [
                      {
                        title: "English",
                        description: "",
                        linkUrl: "/en/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/8c9b6082-99b8-4c9a-ae8d-7fb6490ac171/English_1.svg?ext=.svg",
                        code: "EN",
                        selected: false,
                        opensInNewTab: false,
                      },
                    ],
                  },
                  {
                    title: "LATAM",
                    type: "default",
                    sectionItems: [
                      {
                        title: "Portuguese",
                        description: "",
                        linkUrl: "/pt/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/bb5de97f-b693-4a68-a12d-e2c672ca3976/Portuguese.svg?ext=.svg",
                        code: "PT",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "Latin America",
                        description: "",
                        linkUrl: "/latam/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/3f6d0764-8fd6-4f1e-976e-635b45a880b1/Espanol_1.svg?ext=.svg",
                        code: "LATAM",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "Cayman Islands",
                        description: "",
                        linkUrl: "/ky/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/6592fdca-7714-4bee-9f3c-9035374c73fb/cayman-islands.svg?ext=.svg",
                        code: "KY",
                        selected: false,
                        opensInNewTab: false,
                      },
                    ],
                  },
                  {
                    title: "Asia Pacific",
                    type: "default",
                    sectionItems: [
                      {
                        title: "China",
                        description: "",
                        linkUrl: "https://www.thinkmarkets.asia/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/b7aaff9e-a09f-471f-a2ef-09bde76fc0cc/China-CNY_1.svg?ext=.svg",
                        code: "CN",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "Vietnam",
                        description: "",
                        linkUrl: "/vn/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/c7e9592f-0b4f-4f94-9754-b3d627fe725a/vietnam.svg?ext=.svg",
                        code: "VN",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "Indonesia",
                        description: "",
                        linkUrl: "https://www.thinkmarkets.id/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/57064ba6-d17c-4514-845f-fc03ce36a012/indonesia_1.svg?ext=.svg",
                        code: "ID",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "Australia",
                        description: "",
                        linkUrl: "/au/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/593ca8ad-3c40-4bd3-9d1d-2cd1799899c3/AU-Australia-AUD_1.svg?ext=.svg",
                        code: "AU",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "Taiwan",
                        description: "",
                        linkUrl: "/tw/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/efb45653-702f-4a13-a0fe-b35e0363a24c/TW-Taiwan-NTD.svg?ext=.svg",
                        code: "TW",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "Thailand",
                        description: "",
                        linkUrl: "/th/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/1e58d88d-4d1c-43e7-a7d0-44ce91e54364/thailand_1.svg?ext=.svg",
                        code: "TH",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "New Zealand",
                        description: "",
                        linkUrl: "/nz/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/9f02230a-b078-4126-9bf9-b950add0d005/New-Zealand-NZD.png?width=16\u0026height=16\u0026ext=.png",
                        code: "NZ",
                        selected: false,
                        opensInNewTab: false,
                      },
                    ],
                  },
                  {
                    title: "Africa / Middle East",
                    type: "default",
                    sectionItems: [
                      {
                        title: "UAE",
                        description: "",
                        linkUrl: "/ae/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/d9abc47a-56fd-4fff-a7b5-993e0e3850eb/UAE.svg?ext=.svg",
                        code: "AE",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "Arabic",
                        description: "",
                        linkUrl: "/ar/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/f403c928-a841-4236-b92a-c52f0f66bf98/Middle_East.svg?ext=.svg",
                        code: "AR",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "South Africa",
                        description: "",
                        linkUrl: "/za/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/f966df44-bec9-4e70-a191-80b77c36bb87/south-africa_1.svg?ext=.svg",
                        code: "ZA",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "Turkey",
                        description: "",
                        linkUrl: "/tr/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/b15d3acf-3d16-4b23-8bdc-bccf3cfb6ec5/Language-selector-Turkey-TRY-icon.svg?ext=.svg",
                        code: "TR",
                        selected: false,
                        opensInNewTab: false,
                      },
                    ],
                  },
                  {
                    title: "Europe",
                    type: "default",
                    sectionItems: [
                      {
                        title: "United Kingdom",
                        description: "",
                        linkUrl: "/uk/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/44e8026e-10c1-4e13-b25f-6f405a238edb/UK-United-Kingdom-GBP.svg?ext=.svg",
                        code: "UK",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "Spain",
                        description: "",
                        linkUrl: "/es/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/129c2445-846f-4885-b470-f7b419567e08/SP-Spain.svg?ext=.svg",
                        code: "ES",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "Germany",
                        description: "",
                        linkUrl: "/de/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/8bd11d11-0b0d-4843-9368-d514a7fa943d/DE-Germany.svg?ext=.svg",
                        code: "DE",
                        selected: false,
                        opensInNewTab: false,
                      },
                      {
                        title: "Europe",
                        description: "",
                        linkUrl: "/eu/",
                        linkMoreText: "",
                        linkMoreUrl: "",
                        imageUrl:
                          "/getmedia/57684d17-74c7-4b40-9ddc-263f18bd3c78/EU-Euro.svg?ext=.svg",
                        code: "EU",
                        selected: false,
                        opensInNewTab: false,
                      },
                    ],
                  },
                ],
              },
            },
          },
          widgets: {
            language: {
              title: "Select your language/country",
              type: "default",
              currentCulture: "EN",
              currentIcon:
                "/getmedia/8c9b6082-99b8-4c9a-ae8d-7fb6490ac171/English_1.svg?ext=.svg",
              sections: [
                // {
                //   title: "International",
                //   type: "default",
                //   sectionItems: [
                //     {
                //       title: "English",
                //       description: "",
                //       linkUrl: "/en/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/8c9b6082-99b8-4c9a-ae8d-7fb6490ac171/English_1.svg?ext=.svg",
                //       code: "EN",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //   ],
                // },
                // {
                //   title: "LATAM",
                //   type: "default",
                //   sectionItems: [
                //     {
                //       title: "Portuguese",
                //       description: "",
                //       linkUrl: "/pt/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/bb5de97f-b693-4a68-a12d-e2c672ca3976/Portuguese.svg?ext=.svg",
                //       code: "PT",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "Latin America",
                //       description: "",
                //       linkUrl: "/latam/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/3f6d0764-8fd6-4f1e-976e-635b45a880b1/Espanol_1.svg?ext=.svg",
                //       code: "LATAM",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "Cayman Islands",
                //       description: "",
                //       linkUrl: "/ky/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/6592fdca-7714-4bee-9f3c-9035374c73fb/cayman-islands.svg?ext=.svg",
                //       code: "KY",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //   ],
                // },
                // {
                //   title: "Asia Pacific",
                //   type: "default",
                //   sectionItems: [
                //     {
                //       title: "China",
                //       description: "",
                //       linkUrl: "https://www.thinkmarkets.asia/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/b7aaff9e-a09f-471f-a2ef-09bde76fc0cc/China-CNY_1.svg?ext=.svg",
                //       code: "CN",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "Vietnam",
                //       description: "",
                //       linkUrl: "/vn/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/c7e9592f-0b4f-4f94-9754-b3d627fe725a/vietnam.svg?ext=.svg",
                //       code: "VN",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "Indonesia",
                //       description: "",
                //       linkUrl: "https://www.thinkmarkets.id/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/57064ba6-d17c-4514-845f-fc03ce36a012/indonesia_1.svg?ext=.svg",
                //       code: "ID",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "Australia",
                //       description: "",
                //       linkUrl: "/au/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/593ca8ad-3c40-4bd3-9d1d-2cd1799899c3/AU-Australia-AUD_1.svg?ext=.svg",
                //       code: "AU",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "Taiwan",
                //       description: "",
                //       linkUrl: "/tw/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/efb45653-702f-4a13-a0fe-b35e0363a24c/TW-Taiwan-NTD.svg?ext=.svg",
                //       code: "TW",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "Thailand",
                //       description: "",
                //       linkUrl: "/th/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/1e58d88d-4d1c-43e7-a7d0-44ce91e54364/thailand_1.svg?ext=.svg",
                //       code: "TH",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "New Zealand",
                //       description: "",
                //       linkUrl: "/nz/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/9f02230a-b078-4126-9bf9-b950add0d005/New-Zealand-NZD.png?width=16\u0026height=16\u0026ext=.png",
                //       code: "NZ",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //   ],
                // },
                // {
                //   title: "Africa / Middle East",
                //   type: "default",
                //   sectionItems: [
                //     {
                //       title: "UAE",
                //       description: "",
                //       linkUrl: "/ae/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/d9abc47a-56fd-4fff-a7b5-993e0e3850eb/UAE.svg?ext=.svg",
                //       code: "AE",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "Arabic",
                //       description: "",
                //       linkUrl: "/ar/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/f403c928-a841-4236-b92a-c52f0f66bf98/Middle_East.svg?ext=.svg",
                //       code: "AR",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "South Africa",
                //       description: "",
                //       linkUrl: "/za/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/f966df44-bec9-4e70-a191-80b77c36bb87/south-africa_1.svg?ext=.svg",
                //       code: "ZA",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "Turkey",
                //       description: "",
                //       linkUrl: "/tr/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/b15d3acf-3d16-4b23-8bdc-bccf3cfb6ec5/Language-selector-Turkey-TRY-icon.svg?ext=.svg",
                //       code: "TR",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //   ],
                // },
                // {
                //   title: "Europe",
                //   type: "default",
                //   sectionItems: [
                //     {
                //       title: "United Kingdom",
                //       description: "",
                //       linkUrl: "/uk/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/44e8026e-10c1-4e13-b25f-6f405a238edb/UK-United-Kingdom-GBP.svg?ext=.svg",
                //       code: "UK",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "Spain",
                //       description: "",
                //       linkUrl: "/es/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/129c2445-846f-4885-b470-f7b419567e08/SP-Spain.svg?ext=.svg",
                //       code: "ES",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "Germany",
                //       description: "",
                //       linkUrl: "/de/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/8bd11d11-0b0d-4843-9368-d514a7fa943d/DE-Germany.svg?ext=.svg",
                //       code: "DE",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //     {
                //       title: "Europe",
                //       description: "",
                //       linkUrl: "/eu/",
                //       linkMoreText: "",
                //       linkMoreUrl: "",
                //       imageUrl:
                //         "/getmedia/57684d17-74c7-4b40-9ddc-263f18bd3c78/EU-Euro.svg?ext=.svg",
                //       code: "EU",
                //       selected: false,
                //       opensInNewTab: false,
                //     },
                //   ],
                // },
              ],
            },
          },
          menuTitle: "Menu",
          riskWarningMessage: "",
          searchWidgetProps: {
            searchItems: {
              title: "Search this site.",
              type: "default",
              currentCulture: null,
              currentIcon: null,
              sections: [
                {
                  title: "",
                  type: "default",
                  sectionItems: [
                    {
                      title: "",
                      description: "",
                      linkUrl: "",
                      linkMoreText: "",
                      linkMoreUrl: "",
                      imageUrl: "",
                      code: "",
                      selected: false,
                      opensInNewTab: false,
                    },
                  ],
                },
              ],
            },
          },
          logoHref: "/en",
          imgUrl:
            "https://theprimewaves.com/wp-content/uploads/2025/09/Group-2-1-scaled-2048x952.png",
          imgUrlReverse:
            "https://theprimewaves.com/wp-content/uploads/2025/09/Group-2-1-scaled-2048x952.png",

          searchPlaceholder: "Search this site.",
        }),
        navRoot
      );
    } catch (e) {
      // fail silently; static header markup will still render
    }
  };

  const setHeader = (markup) => {
    mountPoint.outerHTML = markup;
    // hydrate React header (for full functionality) after markup is in the DOM
    setTimeout(hydrateHeaderReact, 0);
  };

  const getTemplateUrl = () => {
    const scripts = Array.from(document.getElementsByTagName("script"));
    if (document.currentScript) {
      scripts.unshift(document.currentScript);
    }
    const scriptEl = scripts.find(
      (script) =>
        script.src && script.src.includes("/components/header/header.js")
    );

    if (!scriptEl || !scriptEl.src) {
      return null;
    }

    try {
      const url = new URL(scriptEl.src, window.location.href);
      url.search = "";
      url.hash = "";
      url.pathname = url.pathname.replace(/header\.js$/, "header.html");
      return url.href;
    } catch (error) {
      return null;
    }
  };

  const templateUrl = getTemplateUrl();

  if (templateUrl) {
    fetch(templateUrl)
      .then((response) => (response.ok ? response.text() : Promise.reject()))
      .then((html) => setHeader(html))
      .catch(() => setHeader(fallbackMarkup));
  } else {
    setHeader(fallbackMarkup);
  }
})();
