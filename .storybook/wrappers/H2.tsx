import { Anchor } from "@storybook/addon-docs/blocks";
import { Fragment } from "react/jsx-runtime";

export const H2Wrapper = ({ storyId, ...props }: AnyObject) => (
  <Fragment>
    {storyId && <Anchor storyId={storyId} />}
    <p>ssdfsdfdf</p>
    <cite className="toc-selector" {...props} />
  </Fragment>
);
