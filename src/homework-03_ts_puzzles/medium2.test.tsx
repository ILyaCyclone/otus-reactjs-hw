/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import {
  getDefaultProps_v1,
  DefaultProps_v1,
  getDefaultProps_v2,
  DefaultProps_v2
} from "./medium2";

interface Props {
  count?: number;
  word?: string;
}

const TestComp: React.FC<Props> = (props: Props) => <h1>hi</h1>;

TestComp.defaultProps = {
  count: 1,
  word: "bye"
};

describe("medium2", () => {
  it("v1", () => {
    const defprops: DefaultProps_v1<Props> = getDefaultProps_v1(TestComp);

    expect(defprops).toStrictEqual({ count: 1, word: "bye" });
  });

  it("v2", () => {
    const defprops: DefaultProps_v2<typeof TestComp> = getDefaultProps_v2(
      TestComp
    );

    expect(defprops).toStrictEqual({ count: 1, word: "bye" });
  });
});
