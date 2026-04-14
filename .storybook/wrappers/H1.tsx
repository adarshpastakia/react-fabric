import { Anchor } from "@storybook/addon-docs/blocks";
import { Fragment } from "react/jsx-runtime";

export const H1Wrapper = ({ storyId, ...props }: AnyObject) => (
  <Fragment>
    {storyId && <Anchor storyId={storyId} />}
    <div className="sbdocs-title" {...props} />
    <hr />
  </Fragment>
);
