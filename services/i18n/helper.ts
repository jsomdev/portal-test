import { en, nl } from ".";
import { Messages } from "./types";

export function getMessages(locale?: string, exact: boolean = false): Messages {
  const language: string | undefined = exact ? locale : locale?.split("-")?.[0];

  if (!!language) {
    switch (language) {
      case "nl":
        return nl;
    }
  }

  return en;
}

export const supportedLocales: string[] | undefined = process.env.supportedLocales?.split(",");
