// Задание первого уровня 1
// В функцию приходит массив состояний заказа и фильтруется
// Нужно заменить FIXME на тип который вычисляется на освове OrderState

// FIXME -> UserOrderStates

type UserOrderStates = Array<
  Exclude<OrderState, "buyingSupplies" | "producing">
>;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled"
] as const;

type OrderState = typeof orderStates[number];

export const getUserOrderStates = (
  orderStates: OrderState[]
): UserOrderStates => {
  const filteredStates = [] as UserOrderStates;
  orderStates.forEach((element) => {
    if (element !== "buyingSupplies" && element !== "producing") {
      filteredStates.push(element);
    }
  });
  return filteredStates;
};
