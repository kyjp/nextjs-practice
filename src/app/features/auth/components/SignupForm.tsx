"use client";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import React, { useReducer } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "../action/signup";
import { UserOptionalDefaultSchema } from "../../../../../prisma/generated/zod/modelSchema/UserSchema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();
  const { form, action, handleSubmitWithAction, resetFormAndAction } = useHookFormAction(
    signup,
    zodResolver(UserOptionalDefaultSchema),
    {
      actionProps: {
        onSuccess: ({ data }) => {
          console.log("Signup successful:", data);
          if (data === null) return;
          toast.error(data.message);
          if (data.success) {
            setTimeout(() => {
              router.push("/mypage");
            }, 1000);
          }
        },
      },
      formProps: {
        defaultValues: {
          name: "",
          email: "",
          password: "",
          image: null,
        },
      },
      errorMapProps: {},
    }
  );
  return (
    <Form {...form}>
      <form onSubmit={handleSubmitWithAction} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>名前</FormLabel>
              <FormControl>
                <Input placeholder="ユーザー名" className="border" type="text" {...field} />
              </FormControl>
              <FormDescription>これは効果表示する名前です。</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="メールアドレス" className="border" type="email" {...field} />
              </FormControl>
              <FormDescription>さまざまな通知をこのメールアドレスで受け取ります。</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>パスワード</FormLabel>
              <FormControl>
                <Input placeholder="パスワード" className="border" type="password" {...field} />
              </FormControl>
              <FormDescription>英数字を含めて８文字以上で入力してください。</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={action.isPending}>
          {action.isPending ? "処理中..." : "サインアップ"}
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
