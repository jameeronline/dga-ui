import type { Preview } from '@storybook/html-vite'

//beautify

//tailwind styles
import "../src/styles/output.css";

//remix icons
import 'remixicon/fonts/remixicon.css';

//docs template
import DocumentationTemplate from "./DocumentationTemplate.mdx";
import { TableOfContents } from './components/TableOfContents';
import { format } from '@storybook/addon-docs/blocks';
import { getFormattedHtml } from '../src/utils/code-format';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      // Apply theme and environment-specific logic here
      // document.documentElement.setAttribute("data-theme", theme);
      // document.documentElement.setAttribute("data-environment", environment);

      //format HTML
      const storyOutput = Story(); // Get the Story output (HTMLElement or string)
      const formattedHTML = getFormattedHtml(storyOutput); // Format the HTML based on type
      return `${formattedHTML}`; // Return formatted HTML
    },
  ],
  parameters: {
    docs: {
      page: DocumentationTemplate,
      source: {
        dark: true,
        format: true,
        language: 'html',
      }
    },
    html: {
    // Prettier formatting configuration [citation:2]
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: "css",
      printWidth: 100,
    },
    
    // Remove framework comments (Angular, etc.)
    removeComments: /^\s*remove me\s*$/,
    removeEmptyComments: true,
    
    // Transform HTML output programmatically [citation:10]
    transform: (code) => {
      // Clean up framework-specific attributes
      return code.replace(/(?:_nghost|ng-reflect).*?="[\S\s]*?"/g, "");
    },
    
    // Syntax highlighter options [citation:1]
    highlighter: {
      showLineNumbers: true,
      wrapLines: true,
    },
  },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;