import beautify from 'js-beautify';

export const formatHtml = (html: string): string => {
  const options = {
    indent_size: 2,
    indent_char: ' ',
    max_preserve_newlines: 0,
    preserve_newlines: false,
    wrap_line_length: 0,
  };

  let formattedHtml = beautify.html(html, options);

  formattedHtml = formattedHtml.replace(/class="([^"]*)"/g, (_match: string, classContent: string) => {
    const cleanedClass = classContent.replace(/\s+/g, ' ').trim();
    return `class="${cleanedClass}"`;
  });

  return formattedHtml;
};

export const getFormattedHtml = (storyOutput: string | HTMLElement): string => {
  let htmlOutput: string;

  if (storyOutput instanceof HTMLElement) {
    htmlOutput = storyOutput.outerHTML;
  } else {
    htmlOutput = storyOutput.toString();
  }

  return formatHtml(htmlOutput);
};
