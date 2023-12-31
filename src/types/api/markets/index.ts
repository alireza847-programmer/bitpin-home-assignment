export const GET_MARKETS_API_URL = "v1/mkt/markets/";

export interface AssetItemDto {
  id: number;
  currency1: {
    id: number;
    title: string;
    title_fa: string;
    code: string;
    tradable: boolean;
    for_test: boolean;
    image: string;
    decimal: number;
    decimal_amount: number;
    decimal_irt: number;
    color: string;
    high_risk: boolean;
    show_high_risk: boolean;
    withdraw_commission: string;
    tags: Array<string>;
    etf: boolean;
    for_binvest: boolean;
    for_loan: boolean;
    for_stake: boolean;
    recommend_for_deposit_weight: number;
  };
  currency2: {
    id: number;
    title: string;
    title_fa: string;
    code: string;
    tradable: boolean;
    for_test: boolean;
    image: string;
    decimal: number;
    decimal_amount: number;
    decimal_irt: number;
    color: string;
    high_risk: boolean;
    show_high_risk: boolean;
    withdraw_commission: string;
    tags: Array<any>;
    etf: boolean;
    for_binvest: boolean;
    for_loan: boolean;
    for_stake: boolean;
    recommend_for_deposit_weight: number;
  };
  tradable: boolean;
  for_test: boolean;
  otc_sell_percent: string;
  otc_buy_percent: string;
  otc_max_buy_amount: string;
  otc_max_sell_amount: string;
  order_book_info: {
    created_at: null | number;
    price: string;
    change: number;
    min: string;
    max: string;
    time: string;
    mean: string;
    value: string;
    amount: string;
  };
  internal_price_info: {
    created_at: number;
    price: string;
    change: number;
    min: string;
    max: string;
    time: number;
    mean: any;
    value: any;
    amount: any;
  };
  price_info: {
    created_at: number;
    price: string;
    change: number;
    min: string;
    max: string;
    time: any;
    mean: any;
    value: any;
    amount: any;
  };
  price: string;
  title: string;
  code: string;
  title_fa: string;
  trading_view_source: string;
  trading_view_symbol: string;
  otc_market: boolean;
  text: string;
  volume_24h: string;
  market_cap: string;
  circulating_supply: string;
  all_time_high: string;
  popularity_weight: number;
  freshness_weight: number;
}

export interface MarketsResponseDto {
  count: number;
  next: null | boolean;
  previous: null | boolean;
  results: Array<AssetItemDto>;
}
