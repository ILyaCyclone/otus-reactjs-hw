// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип
// Hint: infer

// FIXME -> DefaultProps_v1 | DefaultProps_v2

import React from "react";

// ---------- variant 1 ----------

export type DefaultProps_v1<T> = Partial<T> | undefined;

export const getDefaultProps_v1 = <T>(
  component: React.ComponentType<T>
): DefaultProps_v1<T> => {
  return component.defaultProps;
};

// ---------- variant 2 ----------

export type DefaultProps_v2<C> = C extends React.ComponentType<infer D>
  ? Partial<D> | undefined
  : never;

export const getDefaultProps_v2 = <T>(
  component: React.ComponentType<T>
): DefaultProps_v2<React.ComponentType<T>> => {
  return component.defaultProps;
};
