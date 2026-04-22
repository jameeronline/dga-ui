declare module 'js-beautify' {
  interface FormatOptions {
    indent_size?: number;
    indent_char?: string;
    max_preserve_newlines?: number;
    wrap_line_length?: number;
    unformatted?: string[];
    preserve_newlines?: boolean;
    end_with_newline?: boolean;
    indent_inner_html?: boolean;
    extra_liners?: string[];
  }

  interface BeautifyResult {
    html: (html: string, options?: FormatOptions) => string;
  }

  const beautify: BeautifyResult;
  export default beautify;
}