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

import { interpolate, renderTemplate } from "../src";

describe("interpolation test", () => {
  it("should interpolate", (done) => {
    expect(interpolate("Blank: ${firstName} ${lastName}", {})).toBe("Blank:  ");
    expect(
      interpolate("Fullname: ${firstName} ${lastName}, ${missing}${age}", {
        firstName: "Cary",
        lastName: "Grant",
        age: 81,
      }),
    ).toBe("Fullname: Cary Grant, 81");
    done();
  });

  it("should render template", (done) => {
    const model = {
      person: {
        firstName: "John",
        lastName: "Doe",
      },
      age: 42,
      dob: "2000-01-01",
    };
    expect(
      renderTemplate(
        "Person: {{person.firstName}} {{person.lastName}}, {{missing}}{{age}}",
        model,
      ),
    ).toBe("Person: John Doe, 42");
    done();
  });
});
