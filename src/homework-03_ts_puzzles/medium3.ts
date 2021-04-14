// Hint: type guards

// FIXME -> UserOrderState

// eslint-disable-next-line prettier/prettier
export type UserOrderState = Exclude<OrderState, "buyingSupplies" | "producing">;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled"
] as const;

export type OrderState = typeof orderStates[number];

// ---------- variant 1 ----------

// eslint-disable-next-line prettier/prettier
export const getUserOrderStates_v1 = (orderStates: OrderState[]): UserOrderState[] =>
  orderStates.filter(
    (state) => state !== "buyingSupplies" && state !== "producing"
  ) as UserOrderState[];

// ---------- variant 2 ----------

const isUserOrderState = (state: OrderState): state is UserOrderState =>
  state !== "buyingSupplies" && state !== "producing";

export const getUserOrderStates_v2 = (
  orderStates: OrderState[]
): UserOrderState[] => orderStates.filter(isUserOrderState);
