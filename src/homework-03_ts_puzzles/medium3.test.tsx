// eslint-disable-next-line prettier/prettier
import {  OrderState, UserOrderState, getUserOrderStates_v1, getUserOrderStates_v2 } from "./medium3";

describe("medium3", () => {
  // eslint-disable-next-line prettier/prettier
  const orderStates: OrderState[] = ["buyingSupplies", "fullfilled", "inWork", "initial", "producing"];

  it("v1", () => {
    const userOrderStates: UserOrderState[] = getUserOrderStates_v1(
      orderStates
    );

    expect(userOrderStates).toStrictEqual(["fullfilled", "inWork", "initial"]);
  });

  it("v2", () => {
    const userOrderStates: UserOrderState[] = getUserOrderStates_v2(
      orderStates
    );

    expect(userOrderStates).toStrictEqual(["fullfilled", "inWork", "initial"]);
  });
});
