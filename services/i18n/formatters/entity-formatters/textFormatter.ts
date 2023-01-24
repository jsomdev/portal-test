export class TextFormatter {
  public formatCamelCase(text: string): string {
    return text
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '')
      .replace('-', '');
  }

  public formatText(
    text: string,
    maxCharacters: number,
    trailingSuffix: string
  ): string {
    if (text.length <= maxCharacters) {
      return text;
    }
    return text.substring(0, maxCharacters - 1).concat(trailingSuffix);
  }
}
