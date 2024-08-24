/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {
  Card,
  Header,
  Icon,
  Section,
  Title,
  Viewport,
} from "@react-fabric/core";
import { Search } from "@react-fabric/form";
import { Countries, matchString } from "@react-fabric/utilities";
import type { Meta, StoryObj } from "@storybook/react";
import { useFilteredList, VirtualList } from "../../src";

const meta: Meta<typeof useFilteredList> = {
  title: "@data/useFilteredList",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "data" },
  },
};

export default meta;
type Story = StoryObj<typeof useFilteredList>;

export const FilteredList: Story = {
  render: (args) => {
    const { filteredList, isSearching, onSearch, query } = useFilteredList(
      Countries.list,
      (country, query) => matchString(country.name, query),
    );

    return (
      <div className="min-h-[600px]">
        <Viewport>
          <Section>
            <Header bg="base" className="gap-2 p-2">
              <div className="container">
                <Search
                  autoFocus
                  value={query}
                  onSearch={onSearch}
                  searching={isSearching}
                />
                <div className="py-2">
                  Showing {filteredList.length}/{Countries.list.length} records
                </div>
              </div>
            </Header>
            <VirtualList items={filteredList} hideScroller fullWidth>
              {({ data }) => (
                <div className="p-2 container max-w-96">
                  <Card>
                    <Title className="flex items-center gap-2">
                      <Icon
                        className="flex-content"
                        size="2rem"
                        icon={`flag ${data.iso2}`}
                      />
                      <span className="flex-1 truncate">{data.name}</span>
                      <span className="text-sm text-muted flex-content">
                        {data.iso2}/{data.iso3}
                      </span>
                    </Title>
                    <div>{data.capital}</div>
                  </Card>
                </div>
              )}
            </VirtualList>
          </Section>
        </Viewport>
      </div>
    );
  },
  args: {},
};
