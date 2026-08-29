/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * Core type definitions for React Fabric.
 *
 * This module exports shared TypeScript types and interfaces used across the library,
 * including CSS prop types, test prop types, polymorphic component props,
 * and utility types for working with React elements and nested object keys.
 */
export type { ColorBase, ColorPalette, ColorTints, ColorUnion, CustomColors } from "./colors";
export type CSSSizeType = string | number;
export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";
export type SizeWithCustom = SizeType | (string & {}) | number;
export interface PositionObject {
    top: number;
    left: number;
}
export interface SizeObject {
    width: number;
    height: number;
}
export interface ScrollObject extends PositionObject, SizeObject {
    scrollWidth?: number;
    scrollHeight: number;
}
/**
 * CSS prop types
 * This interface defines the properties that can be used for styling React components using CSS class names.
 * It includes an optional "className" property for applying CSS class names directly to the component,
 * and an optional "classNames" property which is an object map for component items, allowing for more granular styling.
 * The "dir" property specifies the text direction, which can be either "ltr" (left-to-right) or "rtl" (right-to-left), providing support for internationalization and different writing systems.
 * By using this interface, developers can easily apply consistent styling to their components while also supporting various text directions.
 */
export interface CssProp {
    /**
     * css classname(s)
     */
    className?: string;
}
export interface CssPropWithMap<T extends Record<string, string> = never> extends CssProp {
    /**
     * css classname(s) object map for component items
     */
    classNames?: Partial<T>;
}
export interface HeightProps {
    /**
     * initial height
     */
    height?: number | string;
    /**
     * max height
     */
    maxHeight?: number | string;
    /**
     * min height
     */
    minHeight?: number | string;
}
export interface WidthProps {
    /**
     * initial width
     */
    width?: number | string;
    /**
     * max width
     */
    maxWidth?: number | string;
    /**
     * min width
     */
    minWidth?: number | string;
}
/**
 * Test prop types
 * This interface defines the properties that can be used for testing purposes in React components.
 * It includes optional data attributes for test id and test value, which can be used to identify and interact with elements during testing.
 * The "data-testid" attribute is commonly used to provide a unique identifier for an element, while the "data-test-value" attribute can hold any additional information relevant to the test.
 * By using these properties, developers can write more robust and maintainable tests that target specific elements in the DOM.
 */
export interface TestProps {
    /**
     * data attribute for test id
     */
    "data-testid"?: string;
    /**
     * data attribute for test value
     */
    "data-test-value"?: string;
}
export interface HtmlEvents {
    /**
     * Focus handler for the button.
     */
    onFocus?: (e: React.FocusEvent) => void;
    /**
     * Blur handler for the button.
     */
    onBlur?: (e: React.FocusEvent) => void;
    /**
     * Click handler for the button.
     */
    onClick?: (e?: React.MouseEvent) => CallbackReturn;
    /**
     * Mouse down handler for the button.
     */
    onMouseDown?: (e: React.MouseEvent) => void;
    /**
     * Mouse up handler for the button.
     */
    onMouseUp?: (e: React.MouseEvent) => void;
    /**
     * Mouse over handler for the button.
     */
    onMouseOver?: (e: React.MouseEvent) => void;
    /**
     * Mouse move handler for the button.
     */
    onMouseMove?: (e: React.MouseEvent) => void;
    /**
     * Mouse enter handler for the button.
     */
    onMouseEnter?: (e: React.MouseEvent) => void;
    /**
     * Mouse leave handler for the button.
     */
    onMouseLeave?: (e: React.MouseEvent) => void;
}
export interface Draggable {
    /**
     * make card draggable
     */
    draggable?: boolean;
    /**
     * drag event data key
     */
    dragKey?: string;
    /**
     * drag event data
     */
    dragData?: KeyValue;
    onDrag?: (e: React.DragEvent) => void;
    onDragStart?: (e: React.DragEvent, dragKey: string, dragData?: KeyValue) => void;
    onDragEnd?: (e: React.DragEvent) => void;
}
export interface Droppable {
    /**
     * droppable types. true for all, string[] for specific types
     */
    dropable?: true | string[];
    onDragEnter?: (e: React.DragEvent) => void;
    onDragOver?: (e: React.DragEvent) => void;
    onDragLeave?: (e: React.DragEvent) => void;
    onDrop?: (e: React.DragEvent) => void;
}
/**
 * Utility type for ref props in React components.
 * This type defines a generic interface for components that accept a ref prop, allowing the ref to be of any specified type T (defaulting to HTMLElement).
 * The ref prop is optional and can be used to access the underlying DOM element or component instance.
 * By using this type, you can ensure that your components are properly typed when accepting refs, improving type safety and developer experience.
 */
export interface RefProp<T = HTMLElement> {
    ref?: React.Ref<T>;
}
export type ModalProps<P = unknown, T extends AnyObject = AnyObject> = P & {
    onClose?: (args: T | null) => void;
};
/**
 * Utility type for callback return values, allowing for void, undefined, a specific type T, or a Promise that resolves to T or undefined.
 * This type is useful for defining the return type of callback functions that may perform asynchronous operations or may not return a value at all.
 * By including void and undefined, it allows for flexibility in how the callback is implemented, while still providing the option to return a specific type or a Promise.
 */
export type CallbackReturn<T = unknown> = void | undefined | T | Promise<T | undefined>;
export interface CollapseProps {
    /**
     * Allow collapsing
     */
    collapsable?: boolean;
    /**
     * Default collapsed
     */
    collapsed?: boolean;
    /**
     * Collapse event
     */
    onCollapse?: (state: boolean) => void;
}
export interface ExpandProps {
    /**
     * Allow expanding
     */
    expandable?: boolean;
    /**
     * Default expanded
     */
    expanded?: boolean;
    /**
     * Expand event
     */
    onExpand?: (state: boolean) => void;
}
export type ChildNode<T = unknown> = React.ReactElement<T> | React.ReactNode | false | undefined | null;
export interface ChildProp<T = unknown> {
    children: ChildNode<T>;
}
export interface ChildrenProp<T = unknown> {
    children: ChildNode<T> | Array<ChildNode<T>>;
}
/**
 * React tag types
 */
export type ReactTag = keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<unknown>;
/**
 * Utility type to extract props of a given React tag, excluding the ref prop.
 * If the tag is a valid React element type, it returns the component props without the ref.
 * Otherwise, it returns never.
 */
export type PropsOf<AsTag extends ReactTag> = AsTag extends React.ElementType ? Omit<React.ComponentProps<AsTag>, "ref"> : never;
/**
 * Utility type for polymorphic component props.
 * It combines the props of the specified React tag (excluding "as" and HTML attributes)
 * with an optional "as" prop that allows specifying the component or HTML element to render.
 * This type is useful for creating flexible components that can render different elements based on the "as" prop.
 * The resulting props include all props of the specified tag, except for "as",
 * which are handled separately to avoid conflicts.
 */
export type PolymorphicProps<AsTag extends ReactTag> = Omit<PropsOf<AsTag>, "as" | "children" | "onClick" | "onDragStart"> & {
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    as?: AsTag;
};
/**
 * Utility type to extract the element type from an array or array-like type.
 * If the type is a readonly array, it returns the type of its elements.
 * If the type is an array-like object, it also returns the type of its elements.
 * If the type is undefined or does not match either case, it returns undefined.
 */
export type ArrayType<T extends readonly unknown[] | ArrayLike<unknown> | undefined> = T extends readonly unknown[] ? T[number] : T extends ArrayLike<unknown> ? T[number] : undefined;
/**
 * Utility type to make all properties of a type required, but still allow them to be optional if they were originally optional.
 * This is useful for cases where you want to ensure that all properties are present, but still want to allow for optional properties to be omitted.
 * The type iterates over each property of the input type T and checks if it is required or optional.
 * If the property is required, it keeps it as is. If the property is optional, it allows it to be either the original type or undefined.
 */
export type Complete<T> = {
    [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>> ? T[P] : T[P] | undefined;
};
/**
 * Utility type to recursively extract nested keys from an object type T.
 * It checks if T is an object and iterates over its keys. For each key K, it checks if the corresponding value is also an object.
 * If it is, it recursively extracts the nested keys and combines them with the current key using dot notation.
 * If the value is not an object, it simply returns the current key. The resulting type is a union of all possible nested keys in the object.
 * This type is useful for scenarios where you want to access deeply nested properties of an object using a string path.
 */
export type NestedKeys<T> = T extends object ? {
    [K in keyof T]: K extends string | number ? T[K] extends object ? T[K] extends readonly unknown[] ? T[K][number] extends object ? // Array of objects/items: return key with array index notation and recurse
    `${K}.${NestedKeys<T[K][number]>}` | `${K}` : `${K}` : // Standard object: return key with dot notation and recurse
    `${K}.${NestedKeys<T[K]>}` | `${K}` : `${K}` : never;
}[keyof T] : "";
