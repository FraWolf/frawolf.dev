const filterOptions = { "github.com/": "" };

export function parsePreviewUrl(url: string) {
  const parsedUrl = new URL(url);
  const pathname = parsedUrl.pathname === "/" ? "" : parsedUrl.pathname;
  const finalUrl = `${parsedUrl.hostname}${pathname}`;

  return replaceAll(finalUrl, filterOptions);
}

export function replaceAll(data: string, options?: Record<string, any>) {
  let message = data;

  for (var key in options) {
    const expression = new RegExp(`${key}`, "g");
    message = message.replace(expression, options[key]);
  }

  return message;
}
