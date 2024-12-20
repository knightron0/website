const MDX_READING_SPEED_WORDS_PER_MINUTE = 220;

export function calculateReadingTime(content: string) {
  const plainText = content.replace(/<[^>]+>/g, "");
  const words = plainText.match(/\w+/g);
  const wordCount = words ? words.length : 0;
  const minutes = wordCount / MDX_READING_SPEED_WORDS_PER_MINUTE;
  return {
    text: `${Math.ceil(minutes)} mins read`,
    minutes: minutes,
  };
}
