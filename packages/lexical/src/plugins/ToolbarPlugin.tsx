/*
 * Marble NEXT
 * @version   : 4.0.0
 * @copyright : 2023
 * @license   : Presight.ai
 */

import {
  Button,
  ButtonGroup,
  CoreIcons,
  Divider,
  Dropdown,
  Icon,
  Menu,
  MenuItem,
  ToggleButtonGroup,
  Tooltip,
} from "@react-fabric/core";
import { ColorInput } from "@react-fabric/form";
import { getValue } from "@react-fabric/utilities";
import { FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND } from "lexical";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useFormatWatcher } from "../hooks/useFormatWatcher";

const blockTypeToBlockName: KeyValue = {
  bullet: "Bulleted List",
  code: "Block",
  h1: "Heading",
  h2: "Sub Heading",
  h6: "Comment",
  number: "Numbered List",
  paragraph: "Normal",
  quote: "Quote",
};
const blockTypeToBlockIcon: KeyValue = {
  bullet: CoreIcons.formatListBullet,
  code: CoreIcons.formatCodeBlock,
  h1: " ",
  h2: " ",
  paragraph: "",
  h6: CoreIcons.formatCommentBlock,
  number: CoreIcons.formatListNumber,
  quote: CoreIcons.formatQuoteBlock,
};

const SIZES = Object.freeze([
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "16",
  "18",
  "20",
  "24",
  "28",
  "32",
  "36",
  "48",
  "64",
  "72",
]);

const ButtonWrapper = ({ label, ...rest }: KeyValue) => (
  <Tooltip content={label}>
    <Button aria-label={label} tabIndex={-1} variant="link" {...rest} />
  </Tooltip>
);

export const ToolbarPlugin = () => {
  const watch = useFormatWatcher();
  const { t } = useTranslation("lexical");

  const textFormat = useMemo(() => {
    const ret = [];
    if (watch.isBold) ret.push("bold");
    if (watch.isItalic) ret.push("italic");
    if (watch.isUnderline) ret.push("underline");
    return ret;
  }, [watch]);

  return (
    <div className="border-b flex px-1 py-px">
      <Dropdown>
        <Button
          variant="link"
          tabIndex={-1}
          altIcon={CoreIcons.caretDown}
          icon={blockTypeToBlockIcon[watch.blockType]}
        >
          {blockTypeToBlockName[watch.blockType]}
        </Button>
        <Menu>
          <MenuItem
            icon={blockTypeToBlockIcon.h1}
            label={blockTypeToBlockName.h1}
            onClick={() => watch.formatHeading("h1")}
          />
          <MenuItem
            icon={blockTypeToBlockIcon.h2}
            label={blockTypeToBlockName.h2}
            onClick={() => watch.formatHeading("h2")}
          />
          <MenuItem
            icon={blockTypeToBlockIcon.paragraph}
            label={blockTypeToBlockName.paragraph}
            onClick={watch.formatNormal}
          />
          <MenuItem
            icon={blockTypeToBlockIcon.quote}
            label={blockTypeToBlockName.quote}
            onClick={watch.formatQuote}
          />
          <MenuItem
            icon={blockTypeToBlockIcon.code}
            label={blockTypeToBlockName.code}
            onClick={watch.formatBlock}
          />
          <MenuItem
            icon={blockTypeToBlockIcon.h6}
            label={blockTypeToBlockName.h6}
            onClick={() => watch.formatHeading("h6")}
          />
          <MenuItem
            icon={blockTypeToBlockIcon.bullet}
            label={blockTypeToBlockName.bullet}
            onClick={watch.formatBulletList}
          />
          <MenuItem
            icon={blockTypeToBlockIcon.number}
            label={blockTypeToBlockName.number}
            onClick={watch.formatNumberedList}
          />
        </Menu>
      </Dropdown>
      <Divider vertical />
      <div>
        <Dropdown>
          <Button variant="link" altIcon={CoreIcons.caretDown}>
            {getValue(watch.fontSize + "", "16")}
          </Button>
          <Menu className="hide-icons">
            {SIZES.map((size) => (
              <MenuItem
                key={size}
                label={size}
                active={watch.fontSize === size}
                onClick={() => watch.onSizeChange(size)}
              />
            ))}
          </Menu>
        </Dropdown>
      </div>
      <Divider vertical />
      <ButtonGroup variant="link">
        <ButtonWrapper
          value="start"
          rtlFlip
          label={t("tool.alignStart")}
          icon={CoreIcons.alignLeft}
          onClick={() =>
            watch.activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "start")
          }
        />
        <ButtonWrapper
          value="center"
          label={t("tool.alignCenter")}
          icon={CoreIcons.alignCenter}
          onClick={() =>
            watch.activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center")
          }
        />
        <ButtonWrapper
          value="end"
          rtlFlip
          label={t("tool.alignEnd")}
          icon={CoreIcons.alignRight}
          onClick={() =>
            watch.activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "end")
          }
        />
        <ButtonWrapper
          value="justify"
          rtlFlip
          label={t("tool.alignJustify")}
          icon={CoreIcons.alignJustify}
          onClick={() =>
            watch.activeEditor.dispatchCommand(
              FORMAT_ELEMENT_COMMAND,
              "justify",
            )
          }
        />
        <ButtonWrapper
          value="justify"
          rtlFlip
          label={t("tool.indentOut")}
          icon={CoreIcons.formatIndentDecrease}
          onClick={() => watch.outdent()}
        />
        <ButtonWrapper
          value="justify"
          rtlFlip
          label={t("tool.identIn")}
          icon={CoreIcons.formatIndentIncrease}
          onClick={() => watch.indent()}
        />
      </ButtonGroup>
      <Divider vertical />
      <ToggleButtonGroup variant="link" value={textFormat}>
        <ButtonWrapper
          value="bold"
          label={t("tool.bold")}
          icon={CoreIcons.formatBold}
          onClick={() =>
            watch.activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")
          }
        />
        <ButtonWrapper
          value="italic"
          label={t("tool.italic")}
          icon={CoreIcons.formatItalic}
          onClick={() =>
            watch.activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")
          }
        />
        <ButtonWrapper
          value="underline"
          label={t("tool.underline")}
          icon={CoreIcons.formatUnderline}
          onClick={() =>
            watch.activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")
          }
        />
        <ButtonWrapper
          value="strikethrough"
          label={t("tool.strikethrough")}
          icon={CoreIcons.formatStrikethrough}
          onClick={() =>
            watch.activeEditor.dispatchCommand(
              FORMAT_TEXT_COMMAND,
              "strikethrough",
            )
          }
        />
      </ToggleButtonGroup>
      <Divider vertical />
      <ColorInput
        {...{ noOutline: true }}
        value={watch.fontColor}
        onChange={(v = "#000") => watch.onFontColorSelect(v)}
        decorateStart={<Icon icon={CoreIcons.formatText} />}
      />
      <ColorInput
        {...{ noOutline: true }}
        value={watch.bgColor}
        onChange={(v = "#fff") => watch.onBgColorSelect(v)}
        decorateStart={<Icon icon={CoreIcons.formatFill} />}
      />
      <ButtonWrapper
        value="hilight"
        label={t("tool.hilight")}
        icon={CoreIcons.formatHilight}
        onClick={() => watch.onBgColorSelect("#fde68a")}
      />
      <ButtonWrapper
        value="hilight"
        label={t("tool.clear")}
        icon={CoreIcons.formatClear}
        onClick={() => watch.clearFormatting()}
      />
      <Divider />
    </div>
  );
};
