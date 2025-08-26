import { z } from "zod";

export const customErrorMap = (issue: any, ctx: any) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === "string") {
      return { message: "文字列が必要です" };
    }
    if (issue.expected === "number") {
      return { message: "数値が必要です" };
    }
  }
  if (issue.code === z.ZodIssueCode.too_small) {
    return { message: `${issue.minimum} 以上の値が必要です` };
  }
  if (issue.code === z.ZodIssueCode.too_big) {
    return { message: `${issue.maximum} 以下の値が必要です` };
  }
  if (issue.code === "invalid_string") {
    if (issue.validation === "email") {
      return { message: "有効なメールアドレスを入力してください" };
    }
  }
  return { message: ctx.defaultError };
};

// @ts-ignore
z.setErrorMap(customErrorMap);
