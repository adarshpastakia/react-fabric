@layer base {
html,
body {
@apply m-0 p-0 min-w-full min-h-screen select-none align-baseline antialiased;
}

body {
p,
pre,
code {
@apply select-text;
}

    ::-webkit-scrollbar {
      @apply size-2;
    }

    ::-webkit-scrollbar-track {
      background-color: color-mix(in lab, var(--ax-gray) 22%, var(--ax-bg));
    }

    ::-webkit-scrollbar-thumb {
      background-color: color-mix(in lab, var(--ax-gray) 60%, var(--ax-bg));

      &:hover {
        background-color: color-mix(in lab, var(--ax-gray) 50%, var(--ax-bg));
      }

      &:active {
        background-color: color-mix(
          in lab,
          var(--ax-gray) 70%,
          var(--ax-black)
        );
      }
    }

    ::-webkit-scrollbar-corner {
      background-color: color-mix(in lab, var(--ax-gray) 22%, var(--ax-bg));
    }

    ::selection {
      background-color: color-mix(in lab, var(--ax-accent) 50%, var(--ax-bg));
    }

    *,
    ::before,
    ::after {
      box-sizing: border-box;

      --tw-ring-offset-color: var(--ax-bg);
      --tw-ring-color: var(--ax-primary);
    }

    ::placeholder {
      color: var(--ax-placeholder);
    }

    img,
    svg {
      @apply inline-block fill-current;
    }

    hr {
      height: auto;
      background: none;
      margin: 0.5rem 0;
      border-top: 3px solid var(--ax-bg);
      border-bottom: 2px solid var(--ax-border-base);
      transform: scaleY(0.5);
    }

    :where(
        .grid:not(.grid-flow-row),
        .flex:not(
            :is(.flex-row, .flex-row-reverse, .ax-divider:not([data-vertical]))
          )
      )
      > hr {
      border: 0;
      margin: 0 0.25rem;
      border-inline-start: 3px solid var(--ax-bg);
      border-inline-end: 2px solid var(--ax-border-base);
      transform: scaleX(0.5);
    }

    label {
      cursor: inherit;
    }

}

table {
@apply border-spacing-1 table-fixed w-full border-separate;

    caption {
      @apply text-dimmed text-md;
    }

    td {
      @apply px-2 py-1;
    }

    thead th {
      @apply px-2 py-1;

      background-color: color-mix(in lab, var(--ax-accent) 20%, var(--ax-bg));
      color: color-mix(in lab, var(--ax-accent) 20%, var(--ax-text));
      box-shadow: 0 0 1px 0 var(--ax-border-muted) inset;
    }

    tbody > tr {
      & > td {
        box-shadow: 0 0 1px 0 var(--ax-border-muted) inset;
      }

      &:nth-of-type(odd) > td {
        @apply bg-base;
      }

      &:nth-of-type(even) > td {
        @apply bg-dimmed;
      }
    }

    tfoot td {
      @apply bg-muted font-semibold;

      box-shadow: 0 0 1px 0 var(--ax-border-muted) inset;
    }

    tfoot + caption {
      @apply caption-bottom text-sm;
    }

}

[data-rounded="none"] {
--ax-rounded: 2px;
}

[data-rounded="full"] {
--ax-rounded: 4rem;

    [data-popover-open="true"][data-placement] {
      --ax-rounded: 0.5rem;
    }

    &
      :is(
        .ax-page,
        .paper,
        .ax-card,
        .ax-panel,
        .ax-modal,
        .ax-alert,
        .ax-toast,
        .ax-callout,
        .ax-panel__group,
        .ax-error-boundary,
        .ax-error-boundary *,
        .ax-popover__container,

      ) {
      border-radius: 0.5rem;
    }

}
}
